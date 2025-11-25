import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6 px-4 bg-background text-foreground">
      <p className="font-semibold text-center">Áreas de actuación:</p>
      <p className="text-muted-foreground">Cataluña: Barcelona, Tarragona, Lleida i Girona</p>
      <p className="text-muted-foreground">Valencia: Valencia, Castellón y Alicante</p>
      <p className="text-muted-foreground">Madrid: Madrid y alrededores</p>
      <p className='pt-8 text-sm text-muted-foreground'>&copy; 2025 ReparaTuBañera. Todos los derechos reservados.</p>
    </footer>
  )
}
