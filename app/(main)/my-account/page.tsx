import Link from 'next/link';
import React from 'react';

const MyAccountPage = () => {
  return (
    <div className="px-4 py-8 lg:px-16 lg:py-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Mon Compte
        </h1>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Informations Personnelles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nom Complet</label>
              <p className="text-gray-800 dark:text-white">John Doe</p>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Adresse Email</label>
              <p className="text-gray-800 dark:text-white">john@example.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <div className='flex items-center justify-between'>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Adresse</h2>
            <Link href={'/my-account/edit'} className='p-2 rounded-md border'>Modifier l'adresse</Link>
          </div>
          
          <div>
            <p className="text-gray-800 dark:text-white">123 Rue Principale</p>
            <p className="text-gray-800 dark:text-white">Ville, État, Code Postal</p>
            <p className="text-gray-800 dark:text-white">Pays</p>
          </div>
        </div>
        <div className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Historique des Commandes</h2>
          <div>
            {/* Afficher l'historique des commandes */}
            {/* Vous pouvez mapper les commandes de l'utilisateur et les afficher ici */}
            <div className="border-t border-gray-200 dark:border-gray-700 py-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-800 dark:text-white">Commande #12345</p>
                <p className="text-gray-800 dark:text-white">XX,XX €</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Date : JJ/MM/AAAA</p>
              <p className="text-gray-500 dark:text-gray-400">Statut : Expédié</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
