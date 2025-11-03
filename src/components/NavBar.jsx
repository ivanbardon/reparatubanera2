import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavLink } from "react-router-dom"



export default function NavBar() {
  return (
    <>
    <nav className="fixed top-0 left-0 w-full bg-white z-10">
      <ul className="flex space-x-4 items-center justify-center p-4">
        <li><img src="favicon.svg" alt="Logo" className="h-8" /></li>
        <li><NavLink  to="/" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>Inicio</NavLink></li>
        <li><NavLink to="/trabajos" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>Trabajos</NavLink></li>
        <li><NavLink to="/servicios" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>Servicios</NavLink></li>
        <li><NavLink to="/contacto" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>Contacto</NavLink></li>
      </ul>
    </nav>
    </>
  )
}
