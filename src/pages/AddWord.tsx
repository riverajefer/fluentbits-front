import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { addWordOrSentence } from '../services/words';

const AddWord: React.FC = () => {
  const [theme] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'english' | 'custom'>('english');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const data = await addWordOrSentence(input, mode);
      setResult(data.result || '¡Contenido enviado con éxito!');
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error inesperado.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <PrivateLayout title="Agregar Contenido">
      {/* Contenido principal */}
      <div className="flex items-center justify-center py-12">
        <div className="max-w-md w-full bg-white dark:bg-gray-900 shadow rounded-lg p-8 transition-colors">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            {mode === 'english' ? 'Agregar Palabra en Inglés' : 'Agregar Tema Personalizado'}
          </h2>
          
          <div className="flex justify-center space-x-4 mb-6">
            <button
              type="button"
              onClick={() => setMode('english')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                mode === 'english'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Vocabulario Inglés
            </button>
            <button
              type="button"
              onClick={() => setMode('custom')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                mode === 'custom'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Contenido Personalizado
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {mode === 'english' ? 'Palabra en Inglés' : 'Tema o Concepto'}
              </label>
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                placeholder={mode === 'english' ? "Ej: Algorithm" : "Ej: Patrones de Diseño"}
                rows={4}
                required
              />
            </div>
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
