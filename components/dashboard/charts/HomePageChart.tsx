'use client';
import React from 'react';
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const HomePageChart = () => {
  // Données d'exemple pour les graphiques
  const salesData = [
    { name: 'Jan', Ventes: 4000 },
    { name: 'Fév', Ventes: 3000 },
    { name: 'Mar', Ventes: 5000 },
    { name: 'Avr', Ventes: 6000 },
    { name: 'Mai', Ventes: 8000 },
    { name: 'Juin', Ventes: 7000 },
    { name: 'Juil', Ventes: 9000 },
  ];

  const categoryData = [
    { name: 'Électronique', Ventes: 3000 },
    { name: 'Vêtements', Ventes: 5000 },
    { name: 'Électroménager', Ventes: 4000 },
    { name: 'Livres', Ventes: 2000 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Graphique 1: Performance des ventes dans le temps */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Performance des Ventes</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={salesData}>
            <Area type="monotone" dataKey="Ventes" stroke="#3182CE" fill="#3182CE" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Graphique 2: Distribution par catégorie de produits */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Distribution par Catégorie</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Ventes" fill="#34D399" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HomePageChart;
