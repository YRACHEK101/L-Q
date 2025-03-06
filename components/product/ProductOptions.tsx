"use client";
import { Eye, Heart, ShoppingBag } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useCartStore from "@/store/cartStore";
import useWishlistStore from "@/store/wishlistStore";
import { showToast } from "@/lib/showToast";
import { Product } from "@/types";
import { useProductQuickViewStore } from "@/store/productQuickViewStore";
import Loader from "../others/Loader";

const ProductOptions = ({ product }: { product: Product }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { openModal } = useProductQuickViewStore();
  const { images, name } = product;

  const { addToCart } = useCartStore();
  const { addToWishlist, isInWishlist } = useWishlistStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loader />;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1, selectedColor: "" });
    showToast("Article ajouté au panier", images[0], name);
  };

  const handleAddToWishList = () => {
    if (isInWishlist(product.id)) {
      showToast("Article ajouté à la liste de souhaits", images[0], name);
    } else {
      addToWishlist(product);
      showToast("L'article existe déjà dans la liste de souhaits", images[0], name);
    }
  };

  const handleProductQuickView = () => {
    openModal(product);
  };

  return (
    <div
      className="flex items-center flex-col gap-2"
      onClick={(e) => e.preventDefault()}
    >
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>
            <div
              onClick={handleAddToWishList}
              className="p-2 rounded-lg mr-1 bg-slate-900 text-white"
            >
              <Heart />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Ajouter à la liste de souhaits</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <div
              onClick={handleProductQuickView}
              className="p-2 rounded-lg mr-1 bg-slate-900 text-white"
            >
              <Eye />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Aperçu rapide</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <div
              onClick={handleAddToCart}
              className="p-2 rounded-lg mr-1 bg-slate-900 text-white"
            >
              <ShoppingBag />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Ajouter au panier</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ProductOptions;
