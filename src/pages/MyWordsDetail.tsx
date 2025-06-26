import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSpacedRepetitionsByWordId } from '../services/myWords';
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

const MyWordsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [repetitions, setRepetitions] = useState<SpacedRepetition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepetitions = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getSpacedRepetitionsByWordId(id!);
        setRepetitions(data);
      } catch (err) {
        setError('Error al cargar las repeticiones');
      } finally {
        setLoading(false);
      }
    };
    fetchRepetitions();
  }, [id]);

  return (
    <PrivateLayout>
      <div className="max-w-3xl mx-auto p-4">
        <Link to="/my-words" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Volver a Mis palabras</Link>
        <h1 className="text-2xl font-bold mb-4 prose dark:prose-invert dark-prose-fix">Historial de repeticiones</h1>
        {loading && <div>Cargando...</div>}
        {error && <div className="text-red-500">{error}</div>}
        <div className="space-y-6">
          {repetitions.map(rep => (
            <div key={rep.ID} className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow">
              <div className="text-xs text-gray-500 mb-2">
                Día de repetición: {rep.RepetitionNumber} | Fecha objetivo: {new Date(rep.TargetDate).toLocaleDateString()}
              </div>
              <div dangerouslySetInnerHTML={{ __html: rep.AIResponse }} className="prose dark:prose-invert dark-prose-fix" />
            </div>
          ))}
          {(!loading && repetitions.length === 0) && <div>No hay repeticiones para esta palabra.</div>}
        </div>
      </div>
    </PrivateLayout>
  );
};

export default MyWordsDetail;
