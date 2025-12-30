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
    { image: `${base}/trucha.png`, title: 'Trucha a la Parrilla', description: 'Deliciosa trucha fresca preparada a la parrilla con especias locales' },
    { image: `${base}/chicharron.png`, title: 'Chicharrón Crocante', description: 'Chicharrón crocante y sabroso, servido con salsas tradicionales' },
    { image: `${base}/piedras.png`, title: 'Sabores en Piedras Calientes', description: 'Sabores únicos en piedras calientes, experiencia culinaria memorable' },
    { image: `${base}/lago.png`, title: 'Vista del Lago', description: 'Disfrutarás de vistas increíbles del lago mientras saboreas nuestros platos' }
  ];

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-b from-terracotta-dark via-terracotta to-olive-dark py-16 px-4 md:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-gold mb-6">
            Experiencia Gastronómica
          </h2>
          <p className="text-lg md:text-xl text-cream leading-relaxed max-w-2xl mx-auto">
            Disfruta de una experiencia gastronómica única, donde cada platillo es preparado con pasión y dedicación. ¡Ven y vive La Juliana!
          </p>
        </motion.div>

        {/* Galería simétrica */}
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
              <div className="relative overflow-hidden rounded-xl shadow-2xl h-64 md:h-72">
                <img 
                  src={dish.image} 
                  alt={dish.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.backgroundColor = '#8b5f23';
                    e.target.style.display = 'flex';
                    e.target.style.alignItems = 'center';
                    e.target.style.justifyContent = 'center';
                    e.target.style.color = '#f8f4e3';
                    e.target.textContent = `Imagen: ${dish.title}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
              <figcaption className="mt-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-gold mb-2">
                  {dish.title}
                </h3>
                <p className="text-cream text-sm md:text-base">
                  {dish.description}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 md:px-12 md:py-4 bg-gold text-dark-bg font-semibold font-serif text-lg rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Volver a Inicio
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Experience;
