import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../stylos/Experience.css';

function Experience() {
  const navigate = useNavigate();
  const base = process.env.PUBLIC_URL || '';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const disheses = [
    { key: 'trucha', title: 'Trucha a la Parrilla', description: 'Deliciosa trucha fresca preparada a la parrilla con especias locales' },
    { key: 'chicharron', title: 'Chicharrón Crocante', description: 'Chicharrón crocante y sabroso, servido con salsas tradicionales' },
    { key: 'piedras', title: 'Sabores en Piedras Calientes', description: 'Sabores únicos en piedras calientes, experiencia culinaria memorable' },
    { key: 'lago', title: 'Vista del Lago', description: 'Disfrutarás de vistas increíbles del lago mientras saboreas nuestros platos' }
  ];

  return (
    <motion.section
      className="min-h-screen bg-white text-dark-bg py-20 px-6 md:px-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-olive-dark/70">Fuego, brasas y lago</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Experiencia Gastronómica</h2>
          <p className="text-lg md:text-xl text-dark-bg/70 leading-relaxed max-w-2xl mx-auto">
            Una cocina abierta al paisaje: brasa limpia, platos al centro y texturas que respetan cada ingrediente.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16"
          variants={containerVariants}
        >
          {disheses.map((dish, index) => (
            <motion.figure 
              key={index}
              className="group"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_60px_-50px_rgba(0,0,0,0.45)] h-64 md:h-72 bg-cream">
                <picture>
                  <source srcSet={`${base}/${dish.key}.webp`} type="image/webp" />
                  <img
                    src={`${base}/${dish.key}.png`}
                    alt={dish.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
              <figcaption className="mt-6 text-center space-y-2">
                <h3 className="font-serif text-2xl font-bold text-olive-dark">
                  {dish.title}
                </h3>
                <p className="text-dark-bg/75 text-sm md:text-base leading-relaxed">
                  {dish.description}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 md:px-12 md:py-4 bg-dark-bg text-cream font-serif font-semibold rounded-full hover:bg-olive-dark transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-olive/20"
          >
            Volver a Inicio
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Experience;
