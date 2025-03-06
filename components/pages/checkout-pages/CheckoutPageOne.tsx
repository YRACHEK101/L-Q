import OrderSummaryForCheckout from "@/components/carts/OrderSummaryForCheckout";
import CheckoutForm from "@/components/forms/CheckoutForm";
import CouponCodeForm from "@/components/forms/CouponCodeForm";
import { Separator } from "@/components/ui/separator";
import React from "react";

const CheckoutPageOne = () => {
  return (
    <section className="px-4 py-4 lg:px-16 bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Paiement
          </h1>
          <p>Veuillez remplir le formulaire d'adresse si vous ne l'avez pas encore enregistrée</p>
          <Separator className="dark:bg-white/50 mt-2" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Adresse de Livraison */}
          <div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Adresse de Livraison
              </h2>
              <CheckoutForm />
            </div>
            <CouponCodeForm />
          </div>
          {/* Résumé de la Commande */}
          <OrderSummaryForCheckout />
        </div>
      </div>
    </section>
  );
};

export default CheckoutPageOne;
