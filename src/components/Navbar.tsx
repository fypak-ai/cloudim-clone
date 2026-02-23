import { Link, useNavigate } from 'react-router-dom';
import { Cloud, LogOut, LayoutDashboard, Upload } from 'lucide-react';
import { AppwriteUser } from '../lib/appwrite';

interface NavbarProps {
  user: AppwriteUser | null;
  onSignOut: () => Promise<void>;
}

export default function Navbar({ user, onSignOut }: NavbarProps) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await onSignOut();
    navigate('/');
  };

  return (
    <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl">Cloudim</span>
          </Link>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <Link to="/dashboard" className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm">
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
                <Link to="/transfer" className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm">
                  <Upload className="w-4 h-4" />
                  Transferir
                </Link>
                <div className="h-4 w-px bg-gray-700"></div>
                <span className="text-gray-400 text-sm">{user.name || user.email}</span>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-1.5 text-gray-400 hover:text-red-400 transition-colors text-sm"
                >
                  <LogOut className="w-4 h-4" />
                  Sair
                </button>
              </>
            ) : (
              <>
                <Link to="/sign-in" className="text-gray-400 hover:text-white transition-colors text-sm px-3 py-2">
                  Entrar
                </Link>
                <Link to="/sign-up" className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                  Criar conta grátis
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
