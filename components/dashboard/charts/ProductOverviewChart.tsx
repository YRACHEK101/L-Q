"use client";
import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const ProductOverviewChart = () => {
  // Données d'exemple pour les graphiques
  const productData = [
    { name: "Électronique", Ventes: 3000 },
    { name: "Vêtements", Ventes: 5000 },
    { name: "Électroménager", Ventes: 4000 },
    { name: "Livres", Ventes: 2000 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Aperçu des Produits
      </h2>

      {/* Graphique de Distribution des Ventes par Produit */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
          Distribution des Ventes par Produit
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Ventes" fill="#34D399" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Graphique des Produits les Plus Vendus */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
          Produits les Plus Vendus
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={productData}>
            <Area
              type="monotone"
              dataKey="Ventes"
              stroke="#3182CE"
              fill="#3182CE"
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductOverviewChart;
