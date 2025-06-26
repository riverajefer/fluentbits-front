import React from 'react';
import PrivateLayout from '../layouts/PrivateLayout';

const Profile: React.FC = () => {
  return (
    <PrivateLayout title="Perfil">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-6 transition-colors">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Perfil</h1>
          <div className="mt-6 bg-white dark:bg-gray-900 shadow rounded-lg p-6 transition-colors">
            <p className="text-gray-600 dark:text-gray-300">Configuración del perfil en desarrollo...</p>
          </div>
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Profile;