import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Ocultamos el header si el scroll es mayor de 400px
      setIsVisible(window.scrollY < 400);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiamos el listener cuando el componente se desmonta para evitar problemas de memoria
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* En lugar de eliminar el header, lo ocultamos con una transición suave */}
      <header
        className={`sticky top-20 z-20 bg-background/80 backdrop-blur-sm shadow-md transition-all duration-500 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="text-center py-4">
          <h1 className='text-4xl p-2'>ReparaTuBañera</h1>
          <p className="text-lg text-muted-foreground">Especialistas en la reparación y esmaltado de bañeras y platos de ducha.</p>
        </div>
      </header>
      <div
        className="h-[50vh] bg-contain bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('banera1.jpeg')" }}
        role="img"
        aria-label="Bañera renovada y brillante"
      />
    </>
  );
}