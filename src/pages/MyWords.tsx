import React, { useEffect, useState } from 'react';
import { getAllVocabularyItems } from '../services/myWords';
import PrivateLayout from '../layouts/PrivateLayout';
import '../styles/proseOverrides.css';

interface SpacedRepetition {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  VocabularyItemID: number;
  TargetDate: string;
  RepetitionNumber: number;
  AIResponse: string;
  Sent: boolean;
}

interface VocabularyItem {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  UserID: number;
  Word: string;
}

interface HistoryResponse {
  spaced_repetitions: SpacedRepetition[];
  vocabulary_items: VocabularyItem[];
}

const MyWords: React.FC = () => {
  const [history, setHistory] = useState<HistoryResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState('');

  const filteredWords = history?.vocabulary_items.filter(item =>
    item.Word.toLowerCase().includes(filter.toLowerCase())
  ) || [];

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getAllVocabularyItems();
        setHistory({ vocabulary_items: data, spaced_repetitions: [] });
      } catch (err) {
        setError('Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <PrivateLayout>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 prose dark:prose-invert dark-prose-fix">Mis palabras</h1>
        {loading && <div>Cargando...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {history && (
          <>
            <div className="mb-8">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Filtrar por palabra..."
                  value={filter}
                  onChange={e => setFilter(e.target.value)}
                  className="w-full md:w-1/2 px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
                />
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full rounded shadow border border-gray-200 dark:border-gray-700">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Palabra</th>
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Fecha de creación</th>
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredWords.length === 0 && (
                      <tr><td colSpan={3} className="px-4 py-4 text-center text-gray-400">No hay palabras que coincidan.</td></tr>
                    )}
                    {filteredWords.map(item => (
                      <tr key={item.ID} className="border-b border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                        <td className="px-4 py-2 font-medium text-gray-900 dark:text-gray-100">{item.Word}</td>
                        <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{new Date(item.CreatedAt).toLocaleDateString()}</td>
                        <td className="px-4 py-2">
                          <a href={`my-words/${item.ID}`} className="text-blue-600 hover:underline">Ver repeticiones</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </PrivateLayout>
  );
};

export default MyWords;
