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
      className="min-h-screen bg-cream text-dark-bg py-20 px-6 md:px-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.div
          className="text-center space-y-4"
          variants={sectionVariants}
          custom={0}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-olive-dark/70">
            Casa de campo & lago
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Sobre Nosotros</h2>
          <p className="text-lg md:text-xl text-dark-bg/70 leading-relaxed max-w-3xl mx-auto">
            En las afueras de la ciudad, La Juliana combina fuego, brasa y calma. Un comedor luminoso con vistas al
            lago y un servicio discreto que deja que la conversación lleve el ritmo.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={sectionVariants}
          custom={1}
        >
          <div className="bg-white/80 border border-gold/15 rounded-2xl p-8 shadow-[0_15px_40px_-35px_rgba(0,0,0,0.35)]">
            <h3 className="font-serif text-2xl font-semibold text-olive-dark mb-4 flex items-center gap-3">
              <span className="block h-[2px] w-10 bg-gold" /> Misión
            </h3>
            <p className="text-base md:text-lg text-dark-bg/80 leading-relaxed">
              Servir una experiencia gastronómica auténtica, centrada en producto local, cocción precisa y hospitalidad
              cálida. Un lugar para compartir platos al centro y mirar el paisaje.
            </p>
          </div>
          <div className="bg-white/80 border border-gold/15 rounded-2xl p-8 shadow-[0_15px_40px_-35px_rgba(0,0,0,0.35)]">
            <h3 className="font-serif text-2xl font-semibold text-olive-dark mb-4 flex items-center gap-3">
              <span className="block h-[2px] w-10 bg-gold" /> Visión
            </h3>
            <p className="text-base md:text-lg text-dark-bg/80 leading-relaxed">
              Convertirnos en el referente gastronómico del valle: cocina de territorio, respeto por la naturaleza y un
              ambiente sosegado que invite a volver.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white/90 border border-gold/15 rounded-2xl p-8 md:p-10 shadow-[0_20px_50px_-35px_rgba(0,0,0,0.35)]"
          variants={sectionVariants}
          custom={2}
        >
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-olive-dark">Valores</h3>
            <span className="h-[1px] flex-1 bg-gold/30" />
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <li className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-olive-dark/70">Hospitalidad</p>
              <p className="text-dark-bg/75 leading-relaxed">
                Servicio atento y silencioso para que cada mesa marque su propio tempo.
              </p>
            </li>
            <li className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-olive-dark/70">Producto</p>
              <p className="text-dark-bg/75 leading-relaxed">
                Recetas que respetan el ingrediente, usando productores locales y estaciones.
              </p>
            </li>
            <li className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-olive-dark/70">Naturaleza</p>
              <p className="text-dark-bg/75 leading-relaxed">
                Cuidado del entorno, menos desperdicio y preferencia por materiales nobles.
              </p>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="text-center"
          variants={sectionVariants}
          custom={3}
        >
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 md:px-12 md:py-4 bg-dark-bg text-cream font-serif font-semibold rounded-full hover:bg-olive-dark transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-olive/20"
          >
            Volver al inicio
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
