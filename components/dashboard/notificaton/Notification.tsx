'use client'
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell } from "lucide-react";

const Notification = () => {

  const notifications = [
    { id: 1, message: "Nouvelle commande reçue de John Doe", time: "10:00" },
    { id: 2, message: "Paiement traité pour la commande #123456", time: "10:30" },
    { id: 3, message: "Alerte stock bas : Article XYZ", time: "11:00" },
    { id: 4, message: "Livraison retardée pour la commande #123457", time: "11:30" },
    {
      id: 5,
      message: "Nouvel avis client pour le produit ABC",
      time: "12:00",
    },
  ];

  return (
    <Popover>
      <PopoverTrigger className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 duration-200">
        <Bell />
      </PopoverTrigger>
      <PopoverContent>
        <div className="">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Notifications
          </h2>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {notifications.map((notification) => (
              <div key={notification.id} className="py-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-900 dark:text-white">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Notification;
