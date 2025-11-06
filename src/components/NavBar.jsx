import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "/reparatubanera2/", text: "Inicio" },
  { href: "/reparatubanera2/trabajos.html", text: "Trabajos" },
  { href: "/reparatubanera2/servicios.html", text: "Servicios" },
  { href: "/reparatubanera2/contacto.html", text: "Contacto" },
];

export default function NavBar() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    // Escucha los cambios en el historial del navegador (botones atrás/adelante)
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const getLinkClass = (href) => {
    const baseClasses = "border-b-2 transition-colors duration-300 tracking-wide";
    // Comprueba si la ruta actual es la misma que la del enlace.
    // El caso de "Inicio" es especial porque puede ser "/" o "/index.html".
    const isActive = currentPath === href || (href === "/reparatubanera2/" && currentPath.endsWith("/index.html"));
    return isActive ? `${baseClasses} border-foreground` : `${baseClasses} border-transparent hover:border-foreground`;
  };

  return (
    <nav className="text-foreground fixed top-4 left-4 right-4 rounded-full border shadow-md bg-background/50 backdrop-blur-sm z-10">
      <ul className="flex space-x-4 items-center justify-center p-4">
        <li>
          <Logo className="h-8 w-8" />
        </li>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={getLinkClass(link.href)}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
