import React from "react";
import { Separator } from "../ui/separator";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link'
import { dummyCategories } from "@/data/category/categoryData";
import Logo from "../logo/Logo";


const Footer = () => {
  return (
    <footer className=" bg-gray-700 text-white py-8 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto p-4 md:p-8 flex md:flex-row  flex-wrap gap-4 md:gap-2 justify-between">
        <div className="flex flex-col space-y-4 mb-8 md:mb-0">
          <Logo />
          <p>Votre destination unique pour tous vos besoins en électronique.</p>
          <div className="flex space-x-4">
            <Link
              href="www.facebook.com"
              className=""
            >
              <FaFacebook size={30}/>
            </Link>
            <Link
              href="www.x.com"
              className=""
            >
              <FaTwitter size={30}/>
            </Link>
            <Link
              href="www.instagram.com"
              className=""
            >
              <FaInstagramSquare size={30}/>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Catégories</h3>
          <ul className="space-y-2">
            {dummyCategories.map(category => (
              <li key={category.name}>
              <Link
                href={`/shop?category=${category.name}`}
                className=""
              >
                {category.name}
              </Link>
            </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className=""
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className=""
              >
                À Propos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className=""
              >
                Nous Contacter
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className=""
              >
                Boutique
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/help"
                className=""
              >
                Centre d'Aide
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=""
              >
                Retours et Remboursements
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=""
              >
                Conditions d'Utilisation
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=""
              >
                Politique de Confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-white" />
      <div className="text-center mt-8">
        <p>&copy; 2024 Votre Nom de Marque. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
