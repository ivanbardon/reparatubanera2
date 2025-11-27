import { useState, useEffect } from "react";
import Logo from "./Logo";

const RAW_BASE = import.meta?.env?.BASE_URL ?? '/';
const BASE = RAW_BASE === '/' ? '' : RAW_BASE.replace(/\/$/, '');

// Keep link paths relative and prefix with BASE when rendering.
// Use explicit 'index.html' for the root so we can handle active state reliably.
const navLinks = [
  { href: 'index.html', text: 'Inicio' },
  { href: 'trabajos.html', text: 'Trabajos' },
  { href: 'servicios.html', text: 'Servicios' },
  { href: 'contacto.html', text: 'Contacto' },
];

export default function NavBar() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname);

    // Patch history methods once so we catch client-side navigation (pushState/replaceState)
    if (!window.__locationHookInstalled) {
      const _push = window.history.pushState;
      const _replace = window.history.replaceState;
      window.history.pushState = function (...args) {
        const result = _push.apply(this, args);
        window.dispatchEvent(new Event('locationchange'));
        return result;
      };
      window.history.replaceState = function (...args) {
        const result = _replace.apply(this, args);
        window.dispatchEvent(new Event('locationchange'));
        return result;
      };
      window.__locationHookInstalled = true;
    }

    // Listen for both popstate (back/forward) and our custom locationchange (push/replace)
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('locationchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('locationchange', handleLocationChange);
    };
  }, []);

  const renderHref = (linkHref) => {
    // Build href for the anchor. If BASE is empty (dev) we keep a relative path
    // (no leading slash) so navigation works from index.html in any folder.
    if (linkHref === 'index.html') return BASE ? `${BASE}/` : 'index.html';
    return BASE ? `${BASE}/${linkHref}`.replace(/\/+/g, '/') : linkHref;
  };

  const getLinkClass = (linkHref) => {
    const baseClasses = 'border-b-2 transition-colors duration-300 tracking-wide';

    // Resolve the href as rendered in the anchor and resolve it against the
    // current location so relative links (like 'trabajos.html') resolve to the
    // correct pathname under subpaths.
    const hrefRendered = renderHref(linkHref);
    const linkPathname = new URL(hrefRendered, window.location.href).pathname;

    const normalize = (p) => (p === '/' ? '/' : p.replace(/\/+$|\/+$/g, '').replace(/\/+/g, '/'));

    const normalizedCurrent = normalize(currentPath);
    const normalizedLink = normalize(linkPathname);

    const rootPaths = [
      normalize(BASE ? `${BASE}/` : '/'),
      normalize(BASE ? `${BASE}/index.html` : '/index.html'),
      normalize(BASE ? `${BASE}` : '/'),
    ];

    const isActive = (linkHref === 'index.html' && rootPaths.includes(normalizedCurrent)) || normalizedCurrent === normalizedLink;

    return isActive ? `${baseClasses} border-foreground` : `${baseClasses} border-transparent hover:border-foreground`;
  };

  return (
    <nav className="text-foreground fixed top-4 left-4 right-4 rounded-full border shadow-md bg-background/50 backdrop-blur-3xl z-10">
      <ul className="flex space-x-4 items-center justify-center p-4">
        <li>
          <Logo className="h-8 w-8" />
        </li>
        {navLinks.map((link) => {
          const href = renderHref(link.href);
          return (
            <li key={link.href} className="text-sm">
              <a href={href} className={getLinkClass(link.href)}>
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
