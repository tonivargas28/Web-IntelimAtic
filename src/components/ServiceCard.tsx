import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ServiceItem } from '../types';
import {  X } from 'lucide-react';


interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [showVideo, setShowVideo] = useState(false);
  const { title, description, icon, videoUrl, image } = service;
  
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: index * 0.2
      }
    }
  };

  return (
    <>
      <motion.div 
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        variants={cardVariants}
        whileHover={{ y: -8, scale: 1.02 }}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center space-x-2 text-white">
              {IconComponent && (
                <IconComponent className="w-5 h-5" />
              )}
              <span className="font-medium">{title}</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-secondary-600 mb-6">
            {description}
          </p>

          <div className="flex items-center space-x-4">
         
            
          
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 text-white hover:text-primary-500 transition-colors duration-300 z-10"
              >
                <X size={24} />
              </button>
              
              <div className="relative pt-[56.25%]">
                <iframe
                  src={videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceCard;