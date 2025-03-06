'use client';
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";

// Définir le schéma Zod pour la validation du formulaire
const signInSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères")
});

type SignInFormData = z.infer<typeof signInSchema>;

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormData) => {
    console.log(data); // Gérer la soumission du formulaire
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Connexion
        </h2>
        <div>
          <Button className="w-full p-6 flex items-center justify-center gap-2 text-lg mt-6">
            <FaGoogle size={25} /> Se connecter avec Google
          </Button>
          <p className="text-lg font-bold my-2 text-center">OU</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Adresse Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="vous@exemple.com"
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
          <Button
            type="submit"
            className="w-full bg-blue-500 dark:bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
          >
            Se connecter
          </Button>
        </form>
        <p className="text-center m-1">
          Vous n&apos;avez pas de compte ?{" "}
          <Link className="underline" href={"/sign-up"}>
            S&apos;inscrire
          </Link>
        </p>
        <div className="font-medium">
          Mot de passe oublié ?
          <Link className="underline p-2" href={"/forgot-password"}>
            cliquez ici
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
