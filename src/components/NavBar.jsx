import React from 'react'

export default function NavBar() {
  return (
    <nav>
      <ul className="flex space-x-4 items-center justify-center p-4">
        <li><a href="#" className="text-blue-500">Inicio</a></li>
        <li><a href="#" className="text-blue-500">Trabajos</a></li>
        <li><a href="#" className="text-blue-500">Servicios</a></li>
        <li><a href="#" className="text-blue-500">Contacto</a></li>
      </ul>
    </nav>
  )
}
