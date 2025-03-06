'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Définir le schéma pour la validation du formulaire
const formSchema = z.object({
  title: z.string().min(1, "Le titre est requis"),
  author: z.string().min(1, "L'auteur est requis"),
  date: z.string().min(1, "La date est requise"),
  imageUrl: z.string().url({ message: "Format d'URL invalide" }),
  excerpt: z.string().min(1, "L'extrait est requis"),
  content: z.string().min(1, "Le contenu est requis"),
});

// Define TypeScript types for form data
type FormData = z.infer<typeof formSchema>;

const AddBlogForm: React.FC = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Form submission handler
  const onSubmit = (data: FormData) => {
    console.log("Blog submitted:", data);
  };

  return (
    <div className="max-w-screen-xl w-full mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 my-4">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Ajouter un Article
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-white">
            Titre
          </Label>
          <Input
            type="text"
            id="title"
            {...register("title")}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.title ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-white">
            Auteur
          </Label>
          <Input
            type="text"
            id="author"
            {...register("author")}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.author ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.author && <span className="text-red-500 text-sm">{errors.author.message}</span>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-white">
            Date
          </Label>
          <Input
            type="text"
            id="date"
            {...register("date")}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.date ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.date && <span className="text-red-500 text-sm">{errors.date.message}</span>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 dark:text-white">
            URL de l'Image
          </Label>
          <Input
            type="text"
            id="imageUrl"
            {...register("imageUrl")}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.imageUrl ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.imageUrl && <span className="text-red-500 text-sm">{errors.imageUrl.message}</span>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-white">
            Extrait
          </Label>
          <textarea
            id="excerpt"
            {...register("excerpt")}
            className={`mt-1 p-2 w-full bg-white dark:bg-slate-950 rounded-md ${
              errors.excerpt ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } focus:ring-blue-500 focus:border-blue-500`}
          ></textarea>
          {errors.excerpt && <span className="text-red-500 text-sm">{errors.excerpt.message}</span>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-white">
            Contenu
          </Label>
          <textarea
            id="content"
            {...register("content")}
            className={`mt-1 p-2 w-full rounded-md border ${
              errors.content ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } focus:ring-blue-500 focus:border-blue-500`}
          ></textarea>
          {errors.content && <span className="text-red-500 text-sm">{errors.content.message}</span>}
        </div>
        <div>
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Ajouter l'Article
        </Button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogForm;
