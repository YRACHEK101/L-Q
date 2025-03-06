'use client'
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

// Schéma de validation du formulaire
const schema = z.object({
  firstName: z.string().min(3, "Le prénom est requis"),
  lastName: z.string().min(3, "Le nom est requis"),
  address: z.string().min(5, "L'adresse est requise"),
  phone: z.string().min(8, "Le numéro de téléphone est requis"),
  city: z.string().min(3, "La ville est requise"),
  zip: z.string().min(5, "Le code postal est requis"),
  country: z.string().min(2, "Le pays est requis"),
});

// Defined types for form data
type FormData = z.infer<typeof schema>;

const CheckoutForm: React.FC = () => {
  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">Prénom</Label>
            <Input
              id="firstName"
              {...register("firstName")}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-6 focus:outline-none"
            />
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName.message}</span>
            )}
          </div>
          <div>
            <Label htmlFor="lastName">Nom</Label>
            <Input
              id="lastName"
              {...register("lastName")}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-6 focus:outline-none"
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName.message}</span>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="address">Adresse</Label>
          <Input
            id="address"
            {...register("address")}
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-6 focus:outline-none"
          />
          {errors.address && (
            <span className="text-red-500">{errors.address.message}</span>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              type="tel"
              id="phone"
              {...register("phone")}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-6 focus:outline-none"
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone.message}</span>
            )}
          </div>
          <div>
            <Label htmlFor="city">Ville</Label>
            <Input
              id="city"
              {...register("city")}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-6 focus:outline-none"
            />
            {errors.city && (
              <span className="text-red-500">{errors.city.message}</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="zip">Code Postal</Label>
            <Input
              id="zip"
              {...register("zip")}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-6 focus:outline-none"
            />
            {errors.zip && (
              <span className="text-red-500">{errors.zip.message}</span>
            )}
          </div>
          <div>
            <Label htmlFor="country">Pays</Label>
            <Input
              id="country"
              {...register("country")}
              className="w-full p-6 border border-gray-300 dark:border-gray-700 rounded-lg  focus:outline-none"
            />
            {errors.country && (
              <span className="text-red-500">{errors.country.message}</span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button type="submit">Enregistrer</Button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
