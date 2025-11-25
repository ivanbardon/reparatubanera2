# Instrucciones y guía técnica — reparatubanera2

Este documento es una guía práctica para desarrolladores y diseñadores que trabajen en la web `reparatubanera2`. Contiene el stack tecnológico, características clave, decisiones de diseño y recomendaciones para futuras implementaciones.

**Propósito**
- Servir como referencia para mantener coherencia técnica y visual.
- Ayudar a configurar, desarrollar y desplegar la aplicación.

---

## Tecnologías
- Framework / Bundler: Vite (scripts: `dev`, `build`, `preview`).
- UI: React (JSX, versión utilizada en `package.json` ~ React 19).
- Routing: `react-router-dom`.
- Estilos: Tailwind CSS (configurado con `tailwind.config.js` y utilidades en `index.css`).
- Iconos: `lucide-react`.
- Efectos: `simple-parallax-js` para paralaje simples en imágenes.
- Deploy: `gh-pages` para publicar la carpeta `dist` en GitHub Pages.
- Linter / Dev tools: ESLint y plugins relacionados.

Dependencias principales (según `package.json`):
- `react`, `react-dom`, `react-router-dom`
- `tailwindcss`, `@tailwindcss/vite`, `tailwindcss-animate`
- `lucide-react`, `simple-parallax-js`
- `vite`, `@vitejs/plugin-react-swc`

Scripts útiles (ejecutar desde la raíz del proyecto):
- `npm run dev` — Inicia el servidor de desarrollo (Vite).
- `npm run build` — Genera la versión de producción en `dist`.
- `npm run preview` — Sirve la carpeta `dist` localmente para revisar la build.
- `npm run lint` — Corre ESLint sobre el proyecto.
- `npm run deploy` — Publica `dist` a GitHub Pages (usa `gh-pages`).

---

## Características de la aplicación
- SPA (Single Page Application) construida con React y Vite.
- Estructura de componentes desacoplada: componentes reutilizables en `src/components`.
- Páginas en `src/pages` para rutas principales (`Inicio`, `Servicios`, `Contacto`, `TodosTrabajos`, `TrabajoDetail`).
- Entradas principales: `main.jsx` (bootstrap), `App.jsx` (router/estructura general).
- Uso de utilidades de Tailwind para estilos rápidos y responsive.
- Soporte básico para animaciones (tailwindcss-animate) y efectos visuales (parallax).
- Meta y SEO básicos a través de archivos HTML en la raíz (`index.html`, `contacto.html`, `servicios.html`, `trabajos.html`) y la configuración de `homepage` en `package.json` para GitHub Pages.

---

## Diseño y UI
- Enfoque Mobile-First: las clases de Tailwind aplican estilos para móviles por defecto y se extienden mediante breakpoints.
- Componentes: diseñar componentes pequeños y reutilizables (Botones, Cards, Hero, Nav, Footer).
- Sistema de colores: mantener variables o usar las utilidades de Tailwind. Centralizar paleta en `tailwind.config.js` si se necesita personalización.
- Tipografía: usar clases utilitarias y mantener consistencia en tamaños y pesos.
- Accesibilidad: etiquetas semánticas (`<header>`, `<main>`, `<nav>`, `<footer>`), atributos `alt` en imágenes y contraste de color suficiente.
- Imagen y recursos: optimizar antes de subir a `src/assets` o `public/`.

---

## Estructura de archivos (resumen)
- `index.html` — plantilla principal.
- `src/main.jsx`, `src/App.jsx` — punto de entrada y configuración del router.
- `src/index.css` — importación de Tailwind y estilos globales.
- `src/components/` — componentes reutilizables (HeroSection, NavBar, Footer, etc.).
- `src/pages/` — páginas principales vinculadas a rutas.
- `src/assets/` — imágenes y recursos estáticos.
- Archivos raíz: `tailwind.config.js`, `vite.config.js`, `package.json`, `README.md`.

---

## Guía rápida de contribución y desarrollo
- Requisitos locales: Node.js (v16+ recomendado), npm o yarn.
- Pasos para desarrollo:
  1. `npm install`
  2. `npm run dev` — abrir `http://localhost:5173` (u otro puerto que muestre Vite).
- Para build y revisión de producción:
  1. `npm run build` — genera `dist/`.
  2. `npm run preview` — prueba local de la build.
- Para desplegar en GitHub Pages:
  1. Asegúrate de que `homepage` en `package.json` apunte a la URL correcta.
  2. `npm run build`
  3. `npm run deploy` — publica `dist` usando `gh-pages`.
- Linting / calidad de código:
  - `npm run lint`.
  - Usar ESLint y seguir las reglas existentes; configurar Prettier si se desea formateo automático.

---

## Recomendaciones y buenas prácticas
- Mantener componentes pequeños y con una sola responsabilidad.
- Documentar nuevos componentes con un README breve o comentarios en su carpeta.
- Evitar lógica compleja dentro de componentes presentacionales; extraer hooks personalizados si es necesario.
- Centralizar constantes (colores, breakpoints, rutas) en un archivo `src/config` o en `tailwind.config.js`.
- Tests: considerar añadir pruebas unitarias para componentes críticos (ej. con Jest + React Testing Library).
- CI/CD: añadir checks de lint en PRs y generar builds automáticas si se desea despliegue automático.

---

## Próximos pasos sugeridos
- Añadir un `CONTRIBUTING.md` con normas de commits, branch strategy y revisión de PRs.
- Implementar un sistema de diseño (design system) si la app crece: tokens, componentes base y Storybook.
- Automatizar deploys y checks (GitHub Actions) para lint + build + deploy.

---

Si quieres, puedo: generar un `CONTRIBUTING.md`, agregar ejemplos de componentes base en `src/components/`, o crear workflows de GitHub Actions para CI/CD. ¿Qué prefieres que hagamos ahora? 
