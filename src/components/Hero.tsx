import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/50 to-primary-900/80" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto container-padding z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Innovación en Inteligencia Artificial
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                Transformando{' '}
                <span className="relative">
                  <span className="relative z-10">Negocios</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent-500/30 -rotate-2" />
                </span>{' '}
                con IA
              </h1>
            </div>
            
            <motion.p 
              className="text-xl text-white/80 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Potenciamos su empresa con soluciones de IA y automatización personalizadas 
              que impulsan la eficiencia y el crecimiento sostenible.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="#services" 
                className="btn-primary bg-white text-primary-900 hover:bg-white/90"
              >
                Descubrir Soluciones
              </a>
              <a 
                href="#contact" 
                className="btn-secondary bg-transparent text-white border-white hover:bg-white/10"
              >
                Contactar Ahora
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Image */}
              <img 
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI Automation"
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-900">Automatización IA</p>
                    <p className="text-xs text-secondary-500">24/7 Activo</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-900">Eficiencia</p>
                    <p className="text-xs text-secondary-500">+85% Mejora</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <a href="#services" className="flex flex-col items-center">
          <span className="text-sm mb-2">Descubrir Más</span>
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;