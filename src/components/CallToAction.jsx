import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const CallToAction = () => {
  const email = 'info@reparatubanera.com';
  const phoneNumber = '+34666777888';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}`;

  // Button style aligned with NavBar: small, bordered, subtle background
  const ctaButton =
    "flex items-center justify-center px-4 py-3 text-sm font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-background/50 border hover:bg-background h-14 w-14";

  return (
    <div className="flex flex-col items-center justify-center bg-background text-foreground px-4 py-4">
      <h2 className="text-3xl font-bold">¿Listo para renovar tu baño?</h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        Envíanos una foto del desperfecto por WhatsApp y te daremos un presupuesto sin compromiso. ¡Es rápido, fácil y económico!
      </p>
      <div className="flex flex-row justify-center gap-10 py-6">
        <div className="flex flex-col items-center">
          <a href={`mailto:${email}`} className={ctaButton} aria-label="Enviar correo">
            <Mail className="h-8 w-8 text-foreground" />
          </a>
          <span className="text-sm mt-3">Email</span>
        </div>

        <div className="flex flex-col items-center">
          <a href={`tel:${phoneNumber}`} className={ctaButton} aria-label="Llamar por teléfono">
            <Phone className="h-8 w-8 text-foreground" />
          </a>
          <span className="text-sm mt-3">Llamar</span>
        </div>

        <div className="flex flex-col items-center">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={ctaButton} aria-label="Contactar por WhatsApp">
            <MessageSquare className="h-8 w-8 text-foreground" />
          </a>
          <span className="text-sm mt-3">WhatsApp</span>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

