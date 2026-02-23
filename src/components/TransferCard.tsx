import { Trash2, ExternalLink, CheckCircle, XCircle, Clock, Loader2 } from 'lucide-react';
import { Transfer } from '../hooks/useTransfers';

interface TransferCardProps {
  transfer: Transfer;
  onDelete: (id: string) => void;
}

const statusConfig = {
  pending: { icon: Clock, color: 'text-yellow-400', label: 'Aguardando', bg: 'bg-yellow-400/10' },
  running: { icon: Loader2, color: 'text-blue-400', label: 'Transferindo', bg: 'bg-blue-400/10' },
  done: { icon: CheckCircle, color: 'text-green-400', label: 'Concluído', bg: 'bg-green-400/10' },
  error: { icon: XCircle, color: 'text-red-400', label: 'Erro', bg: 'bg-red-400/10' },
};

function formatBytes(bytes: number) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export default function TransferCard({ transfer, onDelete }: TransferCardProps) {
  const status = statusConfig[transfer.status];
  const StatusIcon = status.icon;

  return (
    <div className="card hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-white font-medium truncate">{transfer.fileName}</p>
            <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${status.bg} ${status.color}`}>
              <StatusIcon className={`w-3 h-3 ${transfer.status === 'running' ? 'animate-spin' : ''}`} />
              {status.label}
            </span>
          </div>
          <p className="text-gray-500 text-sm truncate">{transfer.sourceUrl}</p>
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
            <span>{formatBytes(transfer.fileSize)}</span>
            <span>→ {transfer.destination === 'dropbox' ? 'Dropbox' : 'Cloudim Cloud'}</span>
            <span>{new Date(transfer.createdAt).toLocaleDateString('pt-BR')}</span>
          </div>
          {transfer.status === 'running' && (
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Progresso</span>
                <span>{transfer.progress}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${transfer.progress}%` }}
                />
              </div>
            </div>
          )}
          {transfer.error && (
            <p className="text-red-400 text-xs mt-2">{transfer.error}</p>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={transfer.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-gray-600 hover:text-gray-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={() => onDelete(transfer.$id)}
            className="p-1.5 text-gray-600 hover:text-red-400 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
