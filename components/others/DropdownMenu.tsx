import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const DropdownMenuComponent = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 font-medium px-4 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
          Pages <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-6 space-y-2">
          <DropdownMenuItem>
            <Link href={"/homepagetwo"}>Page d'Accueil 2</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/shoppagetwo"}>Page Boutique 2</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/blogpageone"}>Page Blog 1</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/blogpagetwo"}>Page Blog 2</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/dashboard"}>Tableau de Bord</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/sign-up"}>Inscription</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/sign-in"}>Connexion</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/forgot-password"}>Mot de Passe Oublié</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownMenuComponent;
