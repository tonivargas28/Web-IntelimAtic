import React from 'react';
import { navItems } from '../data';
import { Facebook, Instagram,   Tiktok } from 'react-bootstrap-icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="font-bold text-xl">IntelimAtic</span>
            </div>
            <p className="text-white/70 mb-6">
              Transformando negocios con soluciones de inteligencia artificial y automatización 
              personalizadas para aumentar la eficiencia y productividad.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Enlaces rápidos</h3>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Servicios</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300">
                  Chatbots Inteligentes
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300">
                  Automatización de Procesos
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300">
                  Análisis Predictivo
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300">
                  Asistentes Virtuales
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-white/70 mr-2">📧</span>
                <a href="https://mail.google.com/mail/u/5/#inbox" className="text-white/70 hover:text-white transition-colors duration-300">
                  Intelimatic.sl@gmail.com
                </a>
              </li>
              
              <li className="flex items-start">
                <span className="text-white/70 mr-2">💬</span>
                <a 
                  href="https://wa.me/34600123456" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  WhatsApp: +34 623 96 05 69 / +34 640 66 03 62
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes sociales como botones */}
        <div className="flex justify-center space-x-6 mt-6">
          <a 
            href="https://www.instagram.com/intelimatic.sl/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-secondary-900 p-2 rounded-full hover:bg-secondary-800 transition-colors duration-300"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://www.tiktok.com/@intelimatic" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-secondary-900 p-2 rounded-full hover:bg-secondary-800 transition-colors duration-300"
          >
            <Tiktok size={24} />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61575636909976" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-secondary-900 p-2 rounded-full hover:bg-secondary-800 transition-colors duration-300"
          >
            <Facebook size={24} />
          </a>
       
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>© {currentYear} IntelimAtic. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
