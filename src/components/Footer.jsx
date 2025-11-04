import React from 'react'

export default function Footer() {
  return (
    <footer className="text-center py-12 mt-8 border-t border-border-light dark:border-border-dark">
      <p className="font-semibold">Áreas de actuación:</p>
      <p className="text-gray-600 dark:text-gray-400">Cataluña: Barcelona, Tarragona, Lleida i Girona</p>
      <p className="text-gray-600 dark:text-gray-400">Comunidad Valenciana: Valencia, Castellón y Alicante</p>
      <p className="text-gray-600 dark:text-gray-400">Comunidad de Madrid: Madrid y alrededores</p>
      <p className='pt-8 text-sm text-gray-500'>&copy; 2025 ReparaTuBañera. Todos los derechos reservados.</p>
    </footer>
  )
}
