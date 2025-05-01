import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { team } from '../data';

const About: React.FC = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="heading-lg mb-6">Quiénes Somos</h2>
              <p className="paragraph text-secondary-700 mb-6">
                Somos un equipo de expertos apasionados por la tecnología, con amplia experiencia en 
                inteligencia artificial y automatización. Nuestra misión es transformar la forma en que 
                las empresas operan mediante soluciones innovadoras que aumentan la eficiencia y generan 
                resultados tangibles.
              </p>
              <p className="paragraph text-secondary-700 mb-8">
                Desde nuestra fundación, nos hemos dedicado a desarrollar tecnologías personalizadas que 
                resuelven problemas empresariales complejos de manera inteligente y accesible, siempre 
                con un enfoque centrado en las necesidades específicas de cada cliente.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="btn-primary">
                  Contactar
                </a>
                <a href="#services" className="btn-secondary">
                  Nuestras Soluciones
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="order-1 lg:order-2"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="grid grid-cols-2 gap-4">
                {team.map((member, index) => (
                  <motion.div 
                    key={member.id} 
                    className={`rounded-lg overflow-hidden shadow-md ${
                      index === 0 ? 'col-span-2' : ''
                    }`}
                    variants={itemVariants}
                  >
                    <div className="relative group">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <h3 className="font-semibold text-lg">{member.name}</h3>
                          <p className="text-sm text-white/80">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;