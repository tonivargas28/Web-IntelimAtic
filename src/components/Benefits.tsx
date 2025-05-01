import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { benefits } from '../data';
import BenefitCard from './BenefitCard';

const Benefits: React.FC = () => {
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

  const productivityData = [
    { name: 'Ene', value: 30 },
    { name: 'Feb', value: 45 },
    { name: 'Mar', value: 55 },
    { name: 'Abr', value: 70 },
    { name: 'May', value: 85 },
    { name: 'Jun', value: 100 },
  ];

  const timeData = [
    { name: 'Sin IA', value: 100 },
    { name: 'Con IA', value: 35 },
  ];

  const satisfactionData = [
    { name: 'Muy Satisfecho', value: 60 },
    { name: 'Satisfecho', value: 25 },
    { name: 'Neutral', value: 10 },
    { name: 'Insatisfecho', value: 5 },
  ];

  const COLORS = ['#0F52BA', '#3c7aff', '#94b7ff', '#e6eeff'];

  return (
    <section id="benefits" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-50/50">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${getComputedStyle(document.documentElement).getPropertyValue('--tw-colors-primary-200')} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Beneficios
          </span>
          <h2 className="heading-lg mb-4">
            Resultados <span className="text-primary-500">Medibles</span> y Tangibles
          </h2>
          <p className="paragraph text-secondary-600">
            Nuestras soluciones generan impacto real y cuantificable en su negocio. 
            Observe cómo transformamos datos en éxito empresarial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="heading-sm mb-6 text-center">Aumento de Productividad</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={productivityData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0F52BA" 
                    fill="url(#productivityGradient)" 
                  />
                  <defs>
                    <linearGradient id="productivityGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0F52BA" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0F52BA" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="heading-sm mb-6 text-center">Reducción de Tiempo Operativo</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={timeData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0F52BA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h3 className="heading-sm mb-6 text-center">Satisfacción del Cliente</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={satisfactionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {satisfactionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={benefit.id} 
              benefit={benefit}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;