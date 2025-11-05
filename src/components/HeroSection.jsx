import React from 'react';

export default function HeroSection() {
  return (
    <>
      <header>
        <div className="text-center mt-8 pb-8">
          <h1 className='text-4xl p-2'>ReparaTuBañera</h1>
          <p className="text-lg text-muted-foreground">Especialistas en la reparación y esmaltado de bañeras y platos de ducha.</p>
        </div>
      </header>
      <section className="px-0 md:px-4">
        <img src="banera1.jpeg" alt="Bañera renovada y brillante" className="w-full" />
      </section>
    </>
  );
}