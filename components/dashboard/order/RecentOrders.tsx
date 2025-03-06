import React from 'react';
import OrderActions from './OrderActions';

const RecentOrdersSection = () => {
  // Données d'exemple pour les commandes récentes
  const recentOrders = [
    { id: 1, orderNumber: 'CMD123456', customerName: 'Jean Dupont', date: '01/04/2024', status: 'Expédié' },
    { id: 2, orderNumber: 'CMD123457', customerName: 'Marie Martin', date: '02/04/2024', status: 'En Attente' },
    { id: 3, orderNumber: 'CMD123458', customerName: 'Alice Bernard', date: '03/04/2024', status: 'Livré' },
    { id: 4, orderNumber: 'CMD123459', customerName: 'Pierre Dubois', date: '04/04/2024', status: 'Expédié' },
    { id: 5, orderNumber: 'CMD123460', customerName: 'Sophie Laurent', date: '05/04/2024', status: 'En Attente' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 my-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Commandes Récentes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Numéro de Commande</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentOrders.map((order) => (
              <tr key={order.id} className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap">{order.orderNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.customerName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.status === 'Expédié' ? 'bg-green-100 text-green-800' : 
                    order.status === 'En Attente' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-blue-100 text-blue-800'
                  }`}>{order.status}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <OrderActions />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrdersSection;
