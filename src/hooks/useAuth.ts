import { useState, useEffect } from 'react';
import { account, AppwriteUser } from '../lib/appwrite';
import { AppwriteException } from 'appwrite';

export function useAuth() {
  const [user, setUser] = useState<AppwriteUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const session = await account.get();
      setUser(session as AppwriteUser);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (name: string, email: string, password: string) => {
    const userId = 'unique()';
    await account.create(userId, email, password, name);
    await account.createEmailPasswordSession(email, password);
    const session = await account.get();
    setUser(session as AppwriteUser);
  };

  const signIn = async (email: string, password: string) => {
    await account.createEmailPasswordSession(email, password);
    const session = await account.get();
    setUser(session as AppwriteUser);
  };

  const signOut = async () => {
    try {
      await account.deleteSession('current');
    } catch (e: unknown) {
      if (e instanceof AppwriteException && e.code === 401) {
        // already logged out
      } else {
        throw e;
      }
    }
    setUser(null);
  };

  const sendVerificationEmail = async () => {
    await account.createVerification(window.location.origin + '/verify');
  };

  return { user, loading, signUp, signIn, signOut, sendVerificationEmail, checkSession };
}
