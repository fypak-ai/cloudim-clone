import { Link } from 'react-router-dom';
import { Upload, HardDrive, RefreshCw, Plus } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useTransfers } from '../hooks/useTransfers';
import TransferCard from '../components/TransferCard';

export default function DashboardPage() {
  const { user } = useAuth();
  const { transfers, loading, fetchTransfers, deleteTransfer } = useTransfers(user?.$id);

  const stats = {
    total: transfers.length,
    done: transfers.filter((t) => t.status === 'done').length,
    running: transfers.filter((t) => t.status === 'running').length,
    pending: transfers.filter((t) => t.status === 'pending').length,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-400 mt-1">Olá, {user?.name || user?.email} 🌻</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchTransfers}
            className="btn-outline"
          >
            <RefreshCw className="w-4 h-4" />
            Atualizar
          </button>
          <Link to="/transfer" className="btn-primary">
            <Plus className="w-4 h-4" />
            Nova Transferência
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total', value: stats.total, color: 'text-white' },
          { label: 'Concluídas', value: stats.done, color: 'text-green-400' },
          { label: 'Em andamento', value: stats.running, color: 'text-blue-400' },
          { label: 'Aguardando', value: stats.pending, color: 'text-yellow-400' },
        ].map((s) => (
          <div key={s.label} className="card text-center">
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-gray-400 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Storage Info */}
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-blue-400" />
            <span className="font-medium">Armazenamento</span>
          </div>
          <span className="text-gray-400 text-sm">0 GB / 1 TB usados</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '0.01%' }}></div>
        </div>
        <p className="text-gray-500 text-xs mt-2">Plano Gratuito — 1TB disponível</p>
      </div>

      {/* Transfers List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Transferências</h2>
          {transfers.length > 0 && (
            <span className="text-gray-500 text-sm">{transfers.length} transferência{transfers.length !== 1 ? 's' : ''}</span>
          )}
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-500 mt-4">Carregando...</p>
          </div>
        ) : transfers.length === 0 ? (
          <div className="card text-center py-16">
            <Upload className="w-12 h-12 text-gray-700 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-400 mb-2">Nenhuma transferência ainda</h3>
            <p className="text-gray-600 text-sm mb-6">Inicie sua primeira transferência remota agora mesmo.</p>
            <Link to="/transfer" className="btn-primary inline-flex">
              <Plus className="w-4 h-4" />
              Nova Transferência
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {transfers.map((transfer) => (
              <TransferCard key={transfer.$id} transfer={transfer} onDelete={deleteTransfer} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
