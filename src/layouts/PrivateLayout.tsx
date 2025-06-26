import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAuth } from '../hooks/useAuth';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../styles/pageTransition.css'; // Asegúrate de crear este archivo con los estilos de animación.

interface PrivateLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ title, children }) => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );
  const location = useLocation();

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Theme toggle button */}
            <button
              aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
              onClick={toggleTheme}
              className="mr-4 p-2 rounded-full border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
            </button>
            {/* Logo */}
            <Link to="/dashboard" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">MiApp</span>
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/add-word" className={`transition-colors ${location.pathname === '/add-word' ? 'text-blue-600 dark:text-yellow-400 font-semibold underline' : 'text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-yellow-400'}`}>Agregar palabra</Link>
              <Link to="/my-words" className={`transition-colors ${location.pathname === '/my-words' ? 'text-blue-600 dark:text-yellow-400 font-semibold underline' : 'text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-yellow-400'}`}>Mis palabras</Link>
              <Link to="/profile" className={`transition-colors ${location.pathname === '/profile' ? 'text-blue-600 dark:text-yellow-400 font-semibold underline' : 'text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-yellow-400'}`}>Mi Perfil</Link>
              <Link to="/dashboard" className={`transition-colors ${location.pathname === '/dashboard' ? 'text-blue-600 dark:text-yellow-400 font-semibold underline' : 'text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-yellow-400'}`}>Dashboard</Link>
            </nav>
            {/* Usuario y cerrar sesión */}
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-gray-700 dark:text-gray-200">Hola, {user?.name}</span>
              <Button onClick={logout} variant="secondary">
                Cerrar Sesión
              </Button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
                aria-label="Abrir menú"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 pb-4">
            <nav className="flex flex-col space-y-2 mt-4">
              <Link to="/add-word" className={`px-3 py-2 rounded transition-colors ${location.pathname === '/add-word' ? 'text-blue-600 dark:text-yellow-400 font-semibold underline' : 'text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-yellow-400'}`} onClick={() => setIsMenuOpen(false)}>Agregar palabra</Link>
              <Link to="/profile" className={`px-3 py-2 rounded transition-colors ${location.pathname === '/profile' ? 'text-blue-600 dark:text-yellow-400 font-semibold underline' : 'text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-yellow-400'}`} onClick={() => setIsMenuOpen(false)}>Mi Perfil</Link>
              <Link to="/add-word" className={`px-3 py-2 rounded transition-colors ${location.pathname === '/add-word' ? 'text-blue-600 dark:text-yellow-400 font-semibold underline' : 'text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-yellow-400'}`} onClick={() => setIsMenuOpen(false)}>Agregar palabra</Link>
              <Link to="/my-words" className={`px-3 py-2 rounded transition-colors ${location.pathname === '/my-words' ? 'text-blue-600 dark:text-yellow-400 font-semibold underline' : 'text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-yellow-400'}`} onClick={() => setIsMenuOpen(false)}>Mis palabras</Link>
              <Link to="/profile" className={`px-3 py-2 rounded transition-colors ${location.pathname === '/profile' ? 'text-blue-600 dark:text-yellow-400 font-semibold underline' : 'text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-yellow-400'}`} onClick={() => setIsMenuOpen(false)}>Mi Perfil</Link>
              <Link to="/dashboard" className={`px-3 py-2 rounded transition-colors ${location.pathname === '/dashboard' ? 'text-blue-600 dark:text-yellow-400 font-semibold underline' : 'text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-yellow-400'}`} onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
              <div className="border-t border-gray-200 dark:border-gray-700 mt-3 pt-3 flex flex-col space-y-2">
                <span className="text-gray-700 dark:text-gray-200">Hola, {user?.name}</span>
                <Button onClick={logout} variant="secondary">
                  Cerrar Sesión
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            <div className="px-4 py-6 sm:px-0">
              {children}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </main>
    </div>
  );
};

export default PrivateLayout;
