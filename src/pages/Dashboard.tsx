import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAuth } from '../hooks/useAuth';
import Loading from '../components/common/Loading';
import PrivateLayout from '../layouts/PrivateLayout';

const Dashboard: React.FC = () => {
  const { loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/login');
    }
  }, [loading, isAuthenticated, navigate]);

  if (loading || !isAuthenticated) {
    return <Loading />;
  }

  return (
    <PrivateLayout title="Dashboard">
      <div className="border-4 border-dashed border-gray-200 dark:border-gray-700 rounded-lg h-96 flex items-center justify-center transition-colors">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ¡Bienvenido a tu Dashboard!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Aquí podrás gestionar todos tus proyectos y configuraciones.
          </p>
          <a href="/add-word">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-yellow-400 transition-colors">
              Agregar palabra u oración
            </Button>
          </a>
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Dashboard;
