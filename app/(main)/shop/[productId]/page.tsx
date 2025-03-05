import ProductGallery from "@/components/product/ProductGallery";
import { productsData } from "@/data/products/productsData";
import React from "react";
import RelatedProducts from "@/components/products/RelatedProducts";
import BreadcrumbComponent from "@/components/others/Breadcrumb";
import ProductDetails from "@/components/product/ProductDetails";

// Définir l'interface des props pour le composant
interface ProductIdPageProps {
  params: { productId: string };
}

// Définir le composant principal
const ProductIdPage = ({ params }: ProductIdPageProps) => {
  // TODO: récupérer les données du produit avec le productId

  // Trouver le produit avec l'ID spécifié dans les données des produits
  const product = productsData.find(
    (product) => product.id === Number(params.productId)
  );

  // Filtrer les produits associés basés sur la catégorie du produit actuel
  const relatedProducts = productsData.filter(
    (prod) => prod.category === product?.category
  );

  // Retourner la structure JSX du composant
  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8 flex flex-col items-start gap-2 min-h-screen">
      {/* Composant Fil d'Ariane */}
      <div className="my-2">
        <BreadcrumbComponent links={["/shop"]} pageText={product?.name!} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {/* Galerie du Produit */}
        <ProductGallery isInModal={false} images={product?.images!} />
        {/* Détails du produit */}
        <ProductDetails product={product!}/>
      </div>
      {/* Produits Associés */}
      <RelatedProducts products={relatedProducts} />
    </div>
  );
};

// Exporter le composant par défaut
export default ProductIdPage;
