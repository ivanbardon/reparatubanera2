import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-200 text-zinc-800 p-4 flex flex-col md:flex-row justify-between items-center z-50">
      <p className="text-sm mb-4 md:mb-0 md:mr-4">
        No utilizamos tus cookies para Nada, ni las almacenamos ni se las vendemos a nadie. Tus Cookies son tuyas.
        <p className="font-bold text-center">😉</p>
      </p>
      <div className="flex gap-4">
        <button
          onClick={handleAccept}
          className="bg-white border border-zinc-500 text-zinc-800 font-bold py-2 px-4 rounded hover:bg-zinc-100"
        >
          Aceptar
        </button>
        <button
          onClick={handleDecline}
          className="bg-white border border-zinc-500 text-zinc-800 font-bold py-2 px-4 rounded hover:bg-zinc-100"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
