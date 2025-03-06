"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import ProductTab from "./ProductTab";
import BuyNowBtn from "../buttons/BuyNowBtn";
import AddToCartBtn from "../buttons/AddToCartBtn";
import ProductQuantityChange from "./ProductQuantityChange";
import RatingReview from "../others/RatingReview";
import ProductDescription from "./ProductDescription";
import ProductColorSelection from "./ProductColorSelection";
import { Product } from "@/types";
import Link from "next/link";
import { calculateDiscount } from "@/lib/calculateDiscount";

const ProductDetails = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="space-y-2 mt-2">
      {/* Catégorie */}
      <Link
        href={`/shop?category=${product.category}`}
        className="bg-lime-500 py-1 px-4 rounded-full w-fit"
      >
        {product?.category}
      </Link>
      {/* Nom du Produit */}
      <h2 className="text-2xl md:text-3xl font-bold capitalize">
        {product?.name}
      </h2>
      {/* Notes et Avis */}
      <RatingReview
        rating={product?.rating || 0}
        review={product?.reviews.length || 0}
      />
      {/* Description du Produit */}
      <ProductDescription description={product?.description as string} />

      {/* Stock du produit */}
      <div>
        {product.stockItems === 0 ? (
          <p className="text-lg w-fit rounded-md text-muted-foreground">
            Rupture de stock
          </p>
        ) : (
          <p className="text-lg w-fit rounded-md text-muted-foreground">
            Seulement <span className="text-lg text-black dark:text-white">({product.stockItems})</span> articles en stock
          </p>
        )}
      </div>
      {/* Couleurs du produit */}
      <ProductColorSelection
        color={selectedColor}
        setColor={setSelectedColor}
        allColors={product.color!}
      />

      <div className="flex items-center gap-6">
        <div className="">
          {/* Prix Original */}
          <p className="text-muted-foreground line-through text-2xl">
            {product?.price}€
          </p>
          <div className="flex items-center gap-4">
            {/* Prix Réduit */}
            <p className="text-3xl font-bold text-green-500 border-green-500 border py-2 px-6 rounded-lg">
              {calculateDiscount(product.price, product.discount)}€
            </p>
            <ProductQuantityChange
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 !my-6">
        {/* Bouton Ajouter au Panier */}
        <AddToCartBtn product={{ ...product, quantity, selectedColor }} />
        {/* Bouton Acheter Maintenant */}
        <BuyNowBtn product={{ ...product, quantity, selectedColor }} />
      </div>
      {/* Séparateur */}
      <Separator className="!mt-4" />
      {/* Onglets Produit */}
      <ProductTab aboutItem={product?.aboutItem!} reviews={product?.reviews} />
    </div>
  );
};

export default ProductDetails;
