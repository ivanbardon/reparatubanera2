import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"


export default function NavBar() {
  return (
    <>
    <nav>
      <ul className="flex space-x-4 items-center justify-center p-4">
        <li><Link to="/" className="text-blue-500">Inicio</Link></li>
        <li><Link to="/trabajos" className="text-blue-500">Trabajos</Link></li>
        <li><Link to="/servicios" className="text-blue-500">Servicios</Link></li>
        <li><Link to="/contacto" className="text-blue-500">Contacto</Link></li>
      </ul>
    </nav>
    </>
  )
}
