import { useEffect, useState } from "react"

export default function NavBar() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePathChange = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePathChange)

    return () => {
      window.removeEventListener('popstate', handlePathChange)
    }
  }, [])

  const getLinkClass = (href) => {
    const baseClass = "border-b-1 transition-colors duration-300 tracking-wide";
    // Normalize paths for comparison
    const normalizedPath = path.endsWith('.html') ? path : `${path}index.html`;
    const normalizedHref = href.endsWith('.html') ? href : `${href}index.html`;
    
    if (normalizedPath === normalizedHref || (path === '/reparatubanera2/' && href === '/reparatubanera2/')) {
      return `${baseClass} border-foreground`;
    }
    return `${baseClass} border-transparent hover:border-foreground`;
  };

  return (
    <>
    <nav className="fixed top-4 left-4 right-4 rounded-full border shadow-md bg-background/50 backdrop-blur-sm z-10">
      <ul className="flex space-x-4 items-center justify-center p-4">
        <li><img src="/reparatubanera2/favicon.svg" alt="Logo" className="h-8" /></li>
        <li><a href="/reparatubanera2/" className={getLinkClass("/reparatubanera2/")}>Inicio</a></li>
        <li><a href="/reparatubanera2/trabajos.html" className={getLinkClass("/reparatubanera2/trabajos.html")}>Trabajos</a></li>
        <li><a href="/reparatubanera2/servicios.html" className={getLinkClass("/reparatubanera2/servicios.html")}>Servicios</a></li>
        <li><a href="/reparatubanera2/contacto.html" className={getLinkClass("/reparatubanera2/contacto.html")}>Contacto</a></li>
      </ul>
    </nav>
    </>
  )
}
