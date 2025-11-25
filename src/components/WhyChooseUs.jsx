import React from 'react';
import { HandCoins, Trophy, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="px-6 mt-150 pt-2 bg-background text-foreground">
      <h2 className="text-center mt-8 text-4xl font-serif">A nosotros nos eligen porque somos</h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
          <div className="bg-card border rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
            <div className="rounded-full bg-background/10 dark:bg-background/20 p-3 mb-2">
              <Zap className="h-12 w-12 text-card-foreground" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-1 font-serif">Rápidos</h3>
          <p className="text-sm text-muted-foreground max-w-lg">Envianos por WhatsApp una foto del desperfecto junto a la localidad y te enviaremos un presupuesto sin compromiso</p>
        </div>

        {/* Card 2 */}
          <div className="bg-card border rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
            <div className="rounded-full bg-background/10 dark:bg-background/20 p-3 mb-2">
              <Trophy className="h-12 w-12 text-card-foreground" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-1 font-serif">Líderes en el sector</h3>
          <p className="text-sm text-muted-foreground max-w-lg">Precios competitivos sin comprometer la calidad</p>
        </div>

        {/* Card 3 */}
          <div className="bg-card border rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
            <div className="rounded-full bg-background/10 dark:bg-background/20 p-3 mb-2">
              <HandCoins className="h-12 w-12 text-card-foreground" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-1 font-serif">Económicos</h3>
          <p className="text-sm text-muted-foreground max-w-lg">Dejar tu baño como nuevo no te costará un ojo de la cara</p>
        </div>
      </div>
    </section>
  );
}