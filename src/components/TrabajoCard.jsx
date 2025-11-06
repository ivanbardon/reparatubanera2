import React from 'react';

export default function TrabajoCard({ trabajo }) {
  return (
    <div className="block rounded-lg shadow-md overflow-hidden text-left border">
      <div className="relative">
        <img src={trabajo.images[0]} alt={trabajo.title} className="w-full h-56 object-cover" />
      </div>
      <div className="p-2">
        <h3 className="text-lg font-semibold mb-2">{trabajo.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {trabajo.description}
        </p>
        <div className="text-sm text-muted-foreground space-y-1">
          {Object.entries({
            "Tiempo": trabajo.tiempo,
            "Obra necesaria": trabajo.obraNecesaria,
            "Tiempo de secado": trabajo.tiempoSecado,
            "Garantía": trabajo.garantia
          }).map(([label, value]) => (
            <div key={label} className="flex justify-between">
              <span className="font-bold">{label}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
