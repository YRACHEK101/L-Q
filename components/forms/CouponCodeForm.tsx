"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import useCartStore from "@/store/cartStore";
import { toast } from "sonner";

const CouponCodeForm = () => {
  const [coupon, setCoupon] = useState("");
  const { applyCoupon } = useCartStore();

  const handleForSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    applyCoupon(coupon);
    toast("Code promo appliqué avec succès");
  };

  return (
    <div className="mt-2 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
      <form onSubmit={handleForSubmission} action="" className="space-y-2">
        <Label
          className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
          htmlFor="coupon"
        >
          Entrez Votre Code Promo
        </Label>
        <Input
          id="coupon"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="ex : VOTRE_CODE_PROMO"
          className="w-full p-6 rounded-md"
        />
        <div className="flex items-center justify-end">
          <Button>Valider</Button>
        </div>
      </form>
    </div>
  );
};

export default CouponCodeForm;
