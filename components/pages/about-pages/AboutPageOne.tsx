import Image from "next/image";
import React from "react";

const AboutPageOne = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-2 md:p-4">
      <h2 className="text-4xl font-bold mb-4 text-center">À Propos de Nous</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="relative w-full h-[20rem] md:h-[30rem]">
          <Image
            className="rounded-xl object-contain"
            src={"/images/people/group-image.avif"}
            alt="image à propos"
            fill
          />
        </div>

        <div className="text-lg">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Bienvenue dans notre paradis de l'électronique ! Nous sommes passionnés par
            l'idée de fournir les tout derniers gadgets aux passionnés de technologie du
            monde entier. Notre mission est d'offrir des produits de haute qualité à
            des prix abordables, associés à un service client exceptionnel.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Avec des années d'expérience dans l'industrie, nous avons sélectionné une collection
            de produits qui répondent aux exigences des modes de vie modernes. Que vous
            recherchiez des smartphones de pointe, des ordinateurs portables puissants ou
            des appareils domestiques intelligents innovants, nous avons ce qu'il vous faut.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Au cœur de notre activité, nous croyons en l'innovation, la fiabilité et la
            satisfaction client. Nous mettons constamment à jour notre inventaire pour rester
            à la pointe et vous apporter les dernières tendances technologiques. Notre équipe
            dévouée travaille sans relâche pour garantir une expérience d'achat parfaite du
            début à la fin.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Merci de nous avoir choisi comme destination privilégiée pour tout ce qui concerne
            l'électronique. Rejoignez-nous dans cette aventure passionnante alors que nous
            continuons à redéfinir votre façon d'acheter la technologie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPageOne;
