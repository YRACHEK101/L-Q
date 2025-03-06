import AboutMe from "@/components/blog/AboutMe";
import PopularPosts from "@/components/blog/PopularPosts";
import { blogPosts } from "@/data/blog/blogData";
import { dummyCategories } from "@/data/category/categoryData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPageTwo = () => {
  // Exemple de tags
  const tags = ["Technologie", "Gadgets", "Design", "Mode", "Voyage"];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Section Blogs */}
      <div className="grid grid-cols-1 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.title}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
          >
            <div className="relative w-full h-[16rem]">
              <Image
                src={post.image}
                fill
                alt={post.title}
                className="w-full h-[16rem] object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Par {post.author} | {post.date?.toDateString()}
              </p>
              <p className="text-gray-700 dark:text-gray-400">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-4">
                <Link
                  href={`/blog/${post.title}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Lire la suite
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section Barre Latérale */}
      <div className="grid grid-cols-1 gap-8 h-fit">
        {/* Articles Populaires */}
        <PopularPosts />
        {/* À Propos de Moi */}
        <AboutMe />
        {/* Catégories */}
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Catégories
            </h2>
            <ul className="space-y-2">
              {dummyCategories.map((category) => (
                <li
                  key={category.id}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mots-clés */}
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Mots-clés
            </h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-400 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageTwo;
