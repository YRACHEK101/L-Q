import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const NewsLetterTwo = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-400 to-blue-600 dark:from-gray-700 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-white mb-12">
          Abonnez-vous à Notre Newsletter
        </h2>
        <div className="flex justify-center">
          <div className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-lg p-8">
            <form className="flex flex-col sm:flex-row justify-center gap-2 items-center">
              <Input 
                type="email" 
                className="bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 sm:mr-4 w-full sm:w-72" 
                placeholder="Entrez votre adresse email" 
              />
              <Button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg w-full sm:w-auto"
              >
                S&apos;abonner
              </Button>
            </form>
            <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
              Restez informé de nos derniers produits et promotions !
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetterTwo