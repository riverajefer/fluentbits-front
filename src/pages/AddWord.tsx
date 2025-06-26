import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { addWordOrSentence } from '../services/words';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

const AddWord: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

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


  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const data = await addWordOrSentence(input);
      setResult(data.result || '¡Palabra/oración enviada con éxito!');
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error inesperado.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <PrivateLayout title="Agregar Palabra u Oración">
      {/* Contenido principal */}
      <div className="flex items-center justify-center py-12">
        <div className="max-w-md w-full bg-white dark:bg-gray-900 shadow rounded-lg p-8 transition-colors">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            Agrega una palabra u oración
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe una palabra u oración..."
              required
            />
            <Button type="submit" loading={loading} className="w-full">
              Enviar
            </Button>
          </form>
          {result && (
            <div className="mt-4 text-green-600 dark:text-green-400 text-center">{result}</div>
          )}
          {error && (
            <div className="mt-4 text-red-600 dark:text-red-400 text-center">{error}</div>
          )}
        </div>
      </div>
    </PrivateLayout>
  );
};

export default AddWord;
import PrivateLayout from '../layouts/PrivateLayout';
