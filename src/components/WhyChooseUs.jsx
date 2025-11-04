import React from 'react';
import { HandCoins, Handshake, Rocket } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section>
      <h2 className="text-center mt-8">A nosotros nos eligen por</h2>
      <div className="grid grid-cols-3 mt-8">
        <div className="p-4 text-center border-r border-gray-200">
          <Rocket className="mx-auto h-20 w-20 text-primary dark:text-primary-dark text-neutral-800" />
          <h3 className='text-2xl pt-2'>Rapidos</h3>
          <p className='pt-4'>Reparamos tu bañera en menos de 2 horas sin obras</p>
        </div>
        <div className="p-4 text-center border-r border-gray-200">
          <HandCoins className="mx-auto h-20 w-20 text-primary dark:text-primary-dark text-neutral-800" />
          <h3 className='text-2xl pt-2'>Baratos</h3>
          <p className='pt-4'>Precios competitivos sin comprometer la calidad</p>
        </div>
        <div className="p-4 text-center">
          <Handshake className="mx-auto h-20 w-20 text-primary dark:text-primary-dark text-neutral-800" />
          <h3 className='text-2xl pt-2'>Seguros</h3>
          <p className='pt-4'>Ofrecemos garantía en todas nuestras reparaciones</p>
        </div>
      </div>
    </section>
  );
}