import React, { useState } from 'react';

const FloatingChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; sender: string }>>([]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleEnviar = async (e: React.FormEvent) => {
    e.preventDefault();

    // Si el mensaje está vacío, no hacer nada
    if (!mensaje.trim()) return;

    // Agregar el mensaje del usuario al historial de la conversación
    setMessages(prevMessages => [
      ...prevMessages,
      { text: mensaje, sender: 'user' }
    ]);

    // Limpiar el campo de mensaje inmediatamente después de enviarlo
    setMensaje('');

    try {
      // Llamada a la API para obtener la respuesta del bot (con IA)
      const response = await fetch("https://hook.eu2.make.com/2ka31rl22u8dlarpkmu1bqmbu0pgffct", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mensaje }),
      });

      const data = await response.json();
      const botResponse = data.response; // Asumiendo que la respuesta del bot está en "response"

      // Agregar la respuesta del bot al historial de la conversación
      setMessages(prevMessages => [
        ...prevMessages,
        { text: botResponse, sender: 'bot' }
      ]);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleChat}
        className="text-4xl bg-yellow-200 hover:bg-yellow-300 rounded-full p-4 shadow-xl transition-all"
        title="¡Habla conmigo!"
      >
        🤖
      </button>

      {isOpen && (
        <div className="mt-4 w-96 p-5 bg-white rounded-2xl shadow-2xl border border-gray-300 animate-fade-in">
          {/* Contenedor para los mensajes */}
          <div className="h-80 overflow-y-scroll mb-4">
            {/* Mostrar los mensajes de la conversación */}
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div
                  className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Campo de entrada del mensaje */}
          <form onSubmit={handleEnviar} className="flex">
            <input
              type="text"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Escribe un mensaje..."
              required
            />
            <button
              type="submit"
              className="ml-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FloatingChatBot;
