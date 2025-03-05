import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';

const MyOrdersPage = () => {
  // Données factices des commandes
  const orders = [
    {
      id: '12345',
      date: '15/10/2023',
      total: 129.99,
      status: 'Expédié',
      items: [
        {
          id: '1',
          name: 'Apple watch 9 pro',
          quantity: 2,
          image: '/images/products/apple-watch-9-removebg-preview.png',
        },
        {
          id: '2',
          name: 'Asus vivobook gaming laptop',
          quantity: 1,
          image: '/images/products/asus-vivobook-removebg-preview.png',
        },
      ],
    },
  ];

  return (
    <div className="px-4 py-8 lg:px-16 lg:py-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Mes Commandes
        </h1>
        <div className="space-y-8">
          {/* Boucle à travers les commandes */}
          {orders.map((order) => (
            <div key={order.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Commande #{order.id}</h2>
                <p className="text-gray-700 dark:text-gray-300">Date : {order.date}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Total : {order.total.toFixed(2)} €</p>
                <p className="text-gray-700 dark:text-gray-300">Statut : {order.status}</p>
              </div>
              <Separator />
              
              {/* Afficher les articles commandés */}
              <div>
                <h2 className='text-lg font-medium my-2'>Articles Commandés</h2>
                {order.items.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row justify-between items-center gap-2 p-2 shadow-sm mb-2">
                    <Image src={item.image} alt="Produit" width={64} height={64} className="w-16 h-16 object-cover rounded-lg" />
                    <p className="text-gray-800 dark:text-white">{item.name}</p>
                    <p className="text-gray-700 dark:text-gray-300">Quantité : {item.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;
