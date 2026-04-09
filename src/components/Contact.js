import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import '../stylos/Contact.css';

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5 }
    })
  };

  return (
    <motion.section
      className="min-h-screen bg-cream py-20 px-6 md:px-10 flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full max-w-2xl">
        <motion.div 
          className="bg-white/95 border border-gold/15 rounded-2xl shadow-[0_25px_70px_-55px_rgba(0,0,0,0.5)] p-8 md:p-12"
          variants={containerVariants}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold text-olive-dark text-center mb-3"
            variants={itemVariants}
            custom={0}
          >
            Contáctanos
          </motion.h2>
          <motion.p 
            className="text-center text-dark-bg/60 mb-10"
            variants={itemVariants}
            custom={0.1}
          >
            Reservas, eventos o dudas: respondemos pronto.
          </motion.p>

          <motion.div 
            className="mb-10 space-y-4"
            variants={itemVariants}
            custom={0.2}
          >
            <div className="flex items-start gap-4">
              <div className="w-1 h-1 bg-gold rounded-full mt-2.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-olive-dark">Dirección</p>
                <p className="text-dark-bg/70">Sicuani, Perú, 0082</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1 h-1 bg-gold rounded-full mt-2.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-olive-dark">Teléfono</p>
                <a href="tel:989105704" className="text-dark-bg/70 hover:text-olive-dark transition-colors">
                  +51 989-105-704
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1 h-1 bg-gold rounded-full mt-2.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-olive-dark">Email</p>
                <a href="mailto:contacto@lajuliana.com" className="text-dark-bg/70 hover:text-olive-dark transition-colors">
                  contacto@lajuliana.com
                </a>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-gold/15 my-8" />

          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-5 mb-10"
            variants={itemVariants}
            custom={0.3}
          >
            <div>
              <input 
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-dark-bg/10 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 bg-white text-dark-bg placeholder-dark-bg/40 transition-all"
              />
            </div>
            <div>
              <input 
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-dark-bg/10 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 bg-white text-dark-bg placeholder-dark-bg/40 transition-all"
              />
            </div>
            <div>
              <textarea 
                name="message"
                placeholder="Escribe tu mensaje"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-dark-bg/10 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 bg-white text-dark-bg placeholder-dark-bg/40 transition-all resize-none"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-3 bg-dark-bg hover:bg-olive-dark text-cream font-serif font-semibold text-lg rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-olive/20"
            >
              Enviar Mensaje
            </button>
          </motion.form>

          <motion.div 
            className="border-t border-gold/15 pt-8 flex flex-col items-center gap-6"
            variants={itemVariants}
            custom={0.4}
          >
            <p className="text-dark-bg/70 font-semibold">Síguenos en redes sociales</p>
            <div className="flex gap-6">
              <a 
                href="https://www.facebook.com/gatunosky?locale=es_LA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-dark-bg hover:bg-gold text-cream hover:text-dark-bg flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a 
                href="https://www.tiktok.com/@la.juliana26" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-dark-bg hover:bg-gold text-cream hover:text-dark-bg flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="TikTok"
              >
                <FaTiktok className="text-xl" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="mt-10 text-center border-t border-olive border-opacity-20 pt-8"
            variants={itemVariants}
            custom={0.5}
          >
            <button 
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-transparent border border-dark-bg text-dark-bg hover:bg-dark-bg hover:text-cream font-serif font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Volver a Inicio
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
