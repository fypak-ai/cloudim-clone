import { useState, useEffect, useCallback } from 'react';
import { databases, APPWRITE_DATABASE_ID, APPWRITE_TRANSFERS_COLLECTION } from '../lib/appwrite';
import { Query, ID } from 'appwrite';

export type TransferStatus = 'pending' | 'running' | 'done' | 'error';

export type Transfer = {
  $id: string;
  userId: string;
  sourceUrl: string;
  fileName: string;
  fileSize: number;
  status: TransferStatus;
  progress: number;
  createdAt: string;
  destination: 'cloudim' | 'dropbox';
  error?: string;
};

export function useTransfers(userId: string | undefined) {
  const [transfers, setTransfers] = useState<Transfer[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTransfers = useCallback(async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const res = await databases.listDocuments(
        APPWRITE_DATABASE_ID,
        APPWRITE_TRANSFERS_COLLECTION,
        [Query.equal('userId', userId), Query.orderDesc('$createdAt'), Query.limit(50)]
      );
      setTransfers(res.documents as unknown as Transfer[]);
    } catch (e) {
      console.error('Erro ao buscar transferências:', e);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchTransfers();
  }, [fetchTransfers]);

  const createTransfer = async (data: {
    userId: string;
    sourceUrl: string;
    fileName: string;
    fileSize: number;
    destination: 'cloudim' | 'dropbox';
  }) => {
    const doc = await databases.createDocument(
      APPWRITE_DATABASE_ID,
      APPWRITE_TRANSFERS_COLLECTION,
      ID.unique(),
      {
        ...data,
        status: 'pending',
        progress: 0,
        createdAt: new Date().toISOString(),
      }
    );
    await fetchTransfers();
    return doc;
  };

  const deleteTransfer = async (transferId: string) => {
    await databases.deleteDocument(APPWRITE_DATABASE_ID, APPWRITE_TRANSFERS_COLLECTION, transferId);
    setTransfers((prev) => prev.filter((t) => t.$id !== transferId));
  };

  return { transfers, loading, fetchTransfers, createTransfer, deleteTransfer };
}
