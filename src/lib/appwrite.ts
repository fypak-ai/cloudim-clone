import { Client, Account, Databases, Storage, Functions } from 'appwrite';

// ============================================================
// CONFIGURE SUAS CREDENCIAIS APPWRITE AQUI
// ============================================================
export const APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
export const APPWRITE_PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID || 'SEU_PROJECT_ID';
export const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID || 'SEU_DATABASE_ID';
export const APPWRITE_TRANSFERS_COLLECTION = import.meta.env.VITE_APPWRITE_TRANSFERS_COLLECTION || 'transfers';
export const APPWRITE_FILES_BUCKET = import.meta.env.VITE_APPWRITE_FILES_BUCKET || 'files';
// ============================================================

export const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const functions = new Functions(client);

export type AppwriteUser = {
  $id: string;
  name: string;
  email: string;
  emailVerification: boolean;
};
