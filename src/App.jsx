import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Trabajos from "./pages/Trabajos"
import Servicios from "./pages/Servicios"
import Contacto from "./pages/Contacto"
import NotFound from "./pages/NotFound"



import NavBar from "./components/NavBar"


export default function App() {
  return (
    <>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/trabajos" element={<Trabajos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/trabajos/:id" element={<Trabajos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}
