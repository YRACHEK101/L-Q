'use client'
import React from "react";
import { Button } from "../ui/button";
import { Product,} from "@/types";
import useWishlistStore from "@/store/wishlistStore";
import { showToast } from "@/lib/showToast";

const AddToWishlistBtn = ({product}:{product:Product}) => {
  const {addToWishlist,isInWishlist} = useWishlistStore()

  const handleAddToWishList = () => {
    if(isInWishlist(product.id)){
      showToast('Article déjà présent dans la liste de souhaits', product.images[0] as string, product.name)
    }else{
      addToWishlist(product);
      showToast('Article ajouté à la liste de souhaits', product.images[0] as string, product.name)
    }
  }

  return (
    <Button onClick={(handleAddToWishList)} variant={"outline"} className="w-full p-8 text-xl rounded-full">
      {" "}
      Ajouter à la Liste
    </Button>
  );
};

export default AddToWishlistBtn;
