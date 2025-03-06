import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";
import { Plane } from "lucide-react";

const NewsLetter = () => {
  return (
    <section className="p-2 md:p-4 my-4 bg-slate-100 dark:bg-slate-700 shadow">
      <div className="max-w-screen-xl mx-auto  rounded-lg bg-gradient-to-r h-[20rem]   grid place-content-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center  gap-4">
          <Plane size={100} className="text-rose-500 animate-bounce" />
          <div className="flex flex-col items-center gap-2 p-4">
            <h2 className="text-2xl md:text-5xl font-bold capitalize flex items-center mt-2 text-center gap-2">
              Abonnez-vous à notre newsletter
            </h2>
            <p className="text-center">
              Pour recevoir les dernières mises à jour des produits et nos recommandations.
            </p>
            <form
              action=""
              className="flex items-center justify-between border border-rose-500 rounded-full w-full md:w-[50rem] mt-2"
            >
              <Input
                className="rounded-full w-full  md:w-[50%] bg-transparent border-none flex-1 outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Entrez votre email"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-rose-500 text-xl p-8 rounded-full hover:opacity-50 duration-200"
              >
                S&apos;abonner
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
