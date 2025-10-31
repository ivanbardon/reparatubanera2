import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavLink } from "react-router-dom"



export default function NavBar() {
  return (
    <>
    <nav>
      <ul className="flex space-x-4 items-center justify-center p-4">
        <li><NavLink to="/" className="text-blue-500">Inicio</NavLink></li>
        <li><NavLink to="/trabajos" className="text-blue-500">Trabajos</NavLink></li>
        <li><NavLink to="/servicios" className="text-blue-500">Servicios</NavLink></li>
        <li><NavLink to="/contacto" className="text-blue-500">Contacto</NavLink></li>
      </ul>
    </nav>
    </>
  )
}
