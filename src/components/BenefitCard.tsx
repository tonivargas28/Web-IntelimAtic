import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { BenefitItem } from '../types';

interface BenefitCardProps {
  benefit: BenefitItem;
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, index }) => {
  const { title, description, icon } = benefit;
  
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons];

  const cardVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div 
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary-500/10 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/5 rounded-full -ml-16 -mb-16 group-hover:bg-accent-500/10 transition-colors duration-300" />

      <div className="relative flex items-start">
        <div className="flex-shrink-0 mr-6">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 group-hover:bg-primary-500 transition-colors duration-300">
              {IconComponent && (
                <IconComponent className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
              )}
            </div>
          </div>
        </div>

        <div>
          <h3 className="heading-sm mb-3 group-hover:text-primary-500 transition-colors duration-300">
            {title}
          </h3>
          <p className="paragraph-sm text-secondary-600 group-hover:text-secondary-700 transition-colors duration-300">
            {description}
          </p>
          
          <div className="mt-4 flex items-center text-primary-500 font-medium opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span>Descubrir más</span>
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BenefitCard;