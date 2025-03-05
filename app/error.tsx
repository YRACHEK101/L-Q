'use client' // Les composants d'erreur doivent être des composants clients
 
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Enregistrer l'erreur dans un service de rapport d'erreur
    console.error(error)
  }, [error])
 
  return (
    <div className='w-full min-h-screen flex flex-col gap-4 items-center justify-center'>
      <h2>Une erreur est survenue !</h2>
      <Button
        onClick={
          // Tenter de récupérer en essayant de recharger le segment
          () => reset()
        }
      >
        Réessayer
      </Button>
    </div>
  )
}