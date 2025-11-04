import React from 'react';
import { HandCoins, Trophy, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className='px-6'>
      <h2 className="text-center mt-8">A nosotros nos eligen porque somos</h2>
      <div className="mt-8 border-zinc-200 border rounded-2xl p-2">
        <div className="p-4">
          <Zap className="h-8 w-8 text-zinc-800" />
          <h3 className='pt-2 font-bold'>Rápidos</h3>
          <p>Envianos por WhatsApp una foto del desperfecto junto a la localidad y te enviaremos un presupuesto sin compromiso</p>
        </div>
        <div className="p-4">
          <Trophy className="h-8 w-8 text-zinc-800" />
          <h3 className='pt-2 font-bold'>Lideres en el sector</h3>
          <p>Precios competitivos sin comprometer la calidad</p>
        </div>
        <div className="p-4">
          <HandCoins className="h-8 w-8 text-zinc-800" />
          <h3 className='pt-2 font-bold'>Económicos</h3>
          <p>Dejar tu baño como nuevo no te costará un ojo de la cara</p>
        </div>
      </div>
    </section>
  );
}