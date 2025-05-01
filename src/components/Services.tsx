import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from '../data';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="services" className="section-spacing bg-gradient-to-b from-white to-primary-50/30">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            Innovación en Acción
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8">
            Soluciones de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              Inteligencia Artificial
            </span>
            {' '}para su Empresa
          </h2>
          <p className="text-xl text-secondary-600 leading-relaxed max-w-3xl mx-auto">
            Transformamos su negocio con tecnología avanzada de IA y automatización, 
            diseñada para potenciar la eficiencia y el crecimiento.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;