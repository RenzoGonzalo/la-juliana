import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../stylos/About.css';

function About() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-b from-terracotta-dark via-terracotta to-olive py-16 px-4 md:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <motion.h2 
          className="font-serif text-5xl md:text-6xl font-bold text-center text-gold mb-12"
          variants={sectionVariants}
          custom={0}
        >
          Sobre Nosotros
        </motion.h2>

        {/* Descripción principal */}
        <motion.p 
          className="text-lg md:text-xl text-cream text-center leading-relaxed mb-16"
          variants={sectionVariants}
          custom={1}
        >
          Ubicado en las afueras de la ciudad, en un entorno campestre, nuestro restaurante ofrece una experiencia única al aire libre. Con un clima ideal para disfrutar, podrás relajarte mientras contemplas nuestro hermoso lago, el cual proporciona un ambiente tranquilo y perfecto para pasar un buen rato con la familia y amigos.
        </motion.p>

        {/* Misión */}
        <motion.div 
          className="bg-dark-bg bg-opacity-60 backdrop-blur-sm rounded-lg p-8 mb-8 border border-gold border-opacity-30"
          variants={sectionVariants}
          custom={2}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold mb-4">Misión</h3>
          <p className="text-base md:text-lg text-cream leading-relaxed">
            Nuestra misión es ofrecer una experiencia gastronómica que combine la tradición de la comida local con un ambiente acogedor y natural. Nos dedicamos a preparar platillos deliciosos, pensados para ser compartidos, permitiendo que nuestros comensales disfruten de la comida en su mejor expresión, acompañados de buena compañía y un entorno perfecto.
          </p>
        </motion.div>

        {/* Visión */}
        <motion.div 
          className="bg-dark-bg bg-opacity-60 backdrop-blur-sm rounded-lg p-8 mb-8 border border-gold border-opacity-30"
          variants={sectionVariants}
          custom={3}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold mb-4">Visión</h3>
          <p className="text-base md:text-lg text-cream leading-relaxed">
            Queremos ser el restaurante de referencia en la región para aquellos que buscan una experiencia auténtica, relajante y deliciosa. Nuestra visión es seguir ofreciendo lo mejor de la gastronomía local, destacando por nuestra hospitalidad, calidad de servicio y el hermoso entorno natural que nos rodea.
          </p>
        </motion.div>

        {/* Valores */}
        <motion.div 
          className="bg-dark-bg bg-opacity-60 backdrop-blur-sm rounded-lg p-8 mb-12 border border-gold border-opacity-30"
          variants={sectionVariants}
          custom={4}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold mb-6">Valores</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-gold font-bold text-xl">•</span>
              <div>
                <h4 className="font-semibold text-gold mb-1">Calidez y Hospitalidad</h4>
                <p className="text-cream text-sm md:text-base">
                  Nos esforzamos por hacer que cada cliente se sienta como en casa, brindando un servicio amable y cercano.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-gold font-bold text-xl">•</span>
              <div>
                <h4 className="font-semibold text-gold mb-1">Tradición Gastronómica</h4>
                <p className="text-cream text-sm md:text-base">
                  Respetamos y preservamos las recetas tradicionales, usando ingredientes frescos y locales para crear platos que nos conectan con nuestras raíces.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-gold font-bold text-xl">•</span>
              <div>
                <h4 className="font-semibold text-gold mb-1">Compromiso con la Naturaleza</h4>
                <p className="text-cream text-sm md:text-base">
                  Cuidamos el entorno que nos rodea, promoviendo prácticas sostenibles y responsables con el medio ambiente.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Botón de regreso */}
        <motion.div 
          className="text-center"
          variants={sectionVariants}
          custom={5}
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

export default About;
