import Image from "next/image";
import React from "react";

const AboutPageTwo = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Colonne Gauche: Introduction */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Notre Histoire
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            ipsum id neque laoreet tincidunt. Suspendisse potenti. Curabitur
            fringilla nunc ac diam consequat, et mattis magna pulvinar.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Fusce at maximus mi. Aliquam bibendum magna sit amet nisi efficitur,
            ut viverra nisi lacinia. Mauris sed mi a turpis blandit facilisis.
            Nunc id ex a nibh cursus convallis.
          </p>
        </div>

        {/* Colonne Droite: Équipe */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Carte Membre de l'Équipe */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-[16rem]">
                <Image
                  src="/images/people/group-image.avif"
                  alt="Membre d'Équipe 1"
                  className="w-full h-64 object-cover"
                  fill
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Jean Dupont
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Co-Fondateur & PDG
                </p>
              </div>
            </div>

            {/* Carte Membre de l'Équipe */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-[16rem]">
                <Image
                  src="/images/people/group-image.avif"
                  alt="Membre d'Équipe 2"
                  className="w-full h-64 object-cover"
                  fill
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Marie Martin
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Co-Fondatrice & Directrice Technique
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections Supplémentaires */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Notre Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
              ipsum id neque laoreet tincidunt. Suspendisse potenti. Curabitur
              fringilla nunc ac diam consequat, et mattis magna pulvinar.
            </p>
          </div>
        </div>

        {/* Valeurs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nos Valeurs</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Nullam eget ipsum id neque</li>
              <li>Suspendisse potenti</li>
              <li>Curabitur fringilla nunc ac diam</li>
            </ul>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Notre Vision</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
              ipsum id neque laoreet tincidunt. Suspendisse potenti. Curabitur
              fringilla nunc ac diam consequat, et mattis magna pulvinar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageTwo;
