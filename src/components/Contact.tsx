import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MessageSquare } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'contactMessages'), {
        ...formState,
        timestamp: new Date()
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-[#0f52ba] to-[#0f52ba] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight"
          >
            Contáctanos
          </motion.h2>
          <p className="mt-2 text-lg max-w-lg mx-auto">
            ¡Estamos aquí para ayudarte! Déjanos tus datos y mensaje, y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-2xl shadow-xl">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold text-gray-800 flex items-center gap-2">
              <Mail size={20} /> Nombre
            </label>
            <input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f52ba]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold text-gray-800 flex items-center gap-2">
              <Mail size={20} /> Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f52ba]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 font-semibold text-gray-800 flex items-center gap-2">
              <Phone size={20} /> Teléfono
            </label>
            <input
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f52ba]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-semibold text-gray-800 flex items-center gap-2">
              <MessageSquare size={20} /> Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formState.message}
              onChange={handleChange}
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f52ba]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0f52ba] hover:bg-[#0f52ba] text-white py-3 px-6 rounded-lg flex items-center justify-center gap-3 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : (
              <>
                <Send size={20} />
                Enviar
              </>
            )}
          </button>

          {isSubmitted && (
            <p className="text-green-600 text-center mt-4">¡Mensaje enviado con éxito!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
