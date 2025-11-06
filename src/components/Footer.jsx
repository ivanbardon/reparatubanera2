import React from 'react'

export default function Footer() {
  return (
    <footer className="text-center py-6 mt-12 bg-neutral-300 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-300">
      <p className="font-semibold">Áreas de actuación:</p>
      <p className="text-muted-foreground">Cataluña: Barcelona, Tarragona, Lleida i Girona</p>
      <p className="text-muted-foreground">Comunidad Valenciana: Valencia, Castellón y Alicante</p>
      <p className="text-muted-foreground">Comunidad de Madrid: Madrid y alrededores</p>
      <p className='pt-8 text-sm text-muted-foreground'>&copy; 2025 ReparaTuBañera. Todos los derechos reservados.</p>
    </footer>
  )
}
