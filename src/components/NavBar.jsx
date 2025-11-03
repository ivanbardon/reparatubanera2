export default function NavBar() {
  return (
    <>
    <nav className="fixed top-0 left-0 w-full bg-white z-10">
      <ul className="flex space-x-4 items-center justify-center p-4">
        <li><img src="/reparatubanera2/favicon.svg" alt="Logo" className="h-8" /></li>
        <li><a href="/reparatubanera2/">Inicio</a></li>
        <li><a href="/reparatubanera2/trabajos.html">Trabajos</a></li>
        <li><a href="/reparatubanera2/servicios.html">Servicios</a></li>
        <li><a href="/reparatubanera2/contacto.html">Contacto</a></li>
      </ul>
    </nav>
    </>
  )
}
