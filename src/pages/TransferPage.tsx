import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Link2, Cloud, Loader2, ArrowLeft, Info } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useTransfers } from '../hooks/useTransfers';
import { Link } from 'react-router-dom';

export default function TransferPage() {
  const { user } = useAuth();
  const { createTransfer } = useTransfers(user?.$id);
  const navigate = useNavigate();

  const [url, setUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [destination, setDestination] = useState<'cloudim' | 'dropbox'>('cloudim');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const getFileNameFromUrl = (url: string) => {
    try {
      const u = new URL(url);
      const parts = u.pathname.split('/');
      const last = parts[parts.length - 1];
      return last || 'arquivo';
    } catch {
      return 'arquivo';
    }
  };

  const handleUrlChange = (value: string) => {
    setUrl(value);
    if (!fileName && value) {
      setFileName(getFileNameFromUrl(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      setError('Por favor, insira uma URL válida.');
      return;
    }
    if (!user) return;
    setError('');
    setLoading(true);
    try {
      await createTransfer({
        userId: user.$id,
        sourceUrl: url.trim(),
        fileName: fileName || getFileNameFromUrl(url),
        fileSize: 0,
        destination,
      });
      setSuccess(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Erro ao iniciar transferência.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <Link to="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-6">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Dashboard
        </Link>
        <h1 className="text-2xl font-bold">Nova Transferência</h1>
        <p className="text-gray-400 mt-1">Importe arquivos de qualquer URL diretamente para sua nuvem</p>
      </div>

      <div className="card">
        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Transferência iniciada!</h3>
            <p className="text-gray-400 text-sm">Redirecionando para o dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            {/* URL Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                URL do Arquivo *
              </label>
              <div className="relative">
                <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="url"
                  value={url}
                  onChange={(e) => handleUrlChange(e.target.value)}
                  placeholder="https://drive.exemplo.com/arquivo.zip"
                  required
                  className="input-field pl-10"
                />
              </div>
              <div className="flex items-start gap-2 mt-2">
                <Info className="w-3.5 h-3.5 text-gray-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 text-xs">
                  Suporta links diretos, drives remotos (drive.imok.cloud), FTP, HTTP e mais.
                </p>
              </div>
            </div>

            {/* File Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Nome do Arquivo
              </label>
              <input
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="Nome detectado automaticamente"
                className="input-field"
              />
            </div>

            {/* Destination */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Destino
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDestination('cloudim')}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    destination === 'cloudim'
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <Cloud className={`w-6 h-6 mb-2 ${destination === 'cloudim' ? 'text-blue-400' : 'text-gray-500'}`} />
                  <p className="font-medium text-sm">Cloudim Cloud</p>
                  <p className="text-gray-500 text-xs mt-0.5">Armazenamento interno</p>
                </button>
                <button
                  type="button"
                  onClick={() => setDestination('dropbox')}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    destination === 'dropbox'
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className={`w-6 h-6 mb-2 rounded font-bold text-sm flex items-center justify-center ${destination === 'dropbox' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'}`}>
                    D
                  </div>
                  <p className="font-medium text-sm">Dropbox</p>
                  <p className="text-gray-500 text-xs mt-0.5">Sua conta Dropbox</p>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !url.trim()}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Iniciando transferência...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  Iniciar Transferência
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
