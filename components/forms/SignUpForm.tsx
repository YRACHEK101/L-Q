'use client';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { useForm, } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FaGoogle } from "react-icons/fa6";
import { Button } from "../ui/button";

// Définir le schéma Zod pour la validation du formulaire
const signUpSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
  confirmPassword: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères")
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data); // Handle form submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 p-2">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Créer un compte
        </h2>
        <div>
          <Button className="w-full p-6 flex items-center justify-center gap-2 text-lg rounded-lg focus:outline-none mt-6">
            <FaGoogle size={25} /> S'inscrire avec Google
          </Button>
          <p className="text-lg font-bold my-2 text-center">OU</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Nom complet
            </Label>
            <Input
              type="text"
              id="name"
              placeholder="Jean Dupont"
              className={`w-full border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none`}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Adresse Email
            </Label>
            <Input
              type="email"
              placeholder="vous@exemple.com"
              id="email"
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none`}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Mot de passe
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="********"
              className={`w-full border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none`}
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <Label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Confirmer le mot de passe
            </Label>
            <Input
              type="password"
              id="confirmPassword"
              placeholder="********"
              className={`w-full border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none`}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 dark:bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
          >
            S'inscrire
          </Button>
        </form>
        <p className="text-center mt-4">
          Déjà inscrit ?{" "}
          <Link className="underline" href="/sign-in">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
