import React, { useEffect, useState } from 'react';

const FloatingChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Cargar el script de Botpress Webchat cuando el componente se monte
    const loadScript = (src: string) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    loadScript('https://cdn.botpress.cloud/webchat/v2.4/inject.js'); // Script principal de Botpress Webchat
    loadScript('https://files.bpcontent.cloud/2025/05/06/22/20250506223558-S5L1PACV.js'); // Script de configuración

    // Limpiar los scripts cuando el componente se desmonte
    return () => {
      const scripts = document.querySelectorAll('script[src="https://cdn.botpress.cloud/webchat/v2.4/inject.js"], script[src="https://files.bpcontent.cloud/2025/05/06/22/20250506223558-S5L1PACV.js"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón con imagen de una asistenta */}
      <button
        onClick={toggleChat}
        className="w-16 h-16 bg-yellow-200 hover:bg-yellow-300 rounded-full p-2 shadow-xl transition-all"
        title="¡Habla conmigo!"
      >
        {/* Aquí colocamos la foto de la asistenta */}
        <img
          src="https://via.placeholder.com/150" // Reemplaza este enlace con la URL de la imagen de la asistenta
          alt="Asistente"
          className="w-full h-full object-cover rounded-full"
        />
      </button>

      {isOpen && (
        <div className="mt-4 w-96 p-5 bg-white rounded-2xl shadow-2xl border border-gray-300 animate-fade-in">
          <div className="h-80 overflow-y-scroll mb-4">
            {/* El chatbot se inyectará aquí automáticamente */}
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChatBot;
