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
      className="min-h-screen bg-gradient-to-b from-terracotta-dark via-terracotta to-olive-dark py-16 px-4 md:px-8 flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full max-w-2xl">
        {/* Card principal */}
        <motion.div 
          className="bg-cream rounded-xl shadow-2xl p-8 md:p-12"
          variants={containerVariants}
        >
          {/* Título */}
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold text-olive text-center mb-2"
            variants={itemVariants}
            custom={0}
          >
            Contáctanos
          </motion.h2>
          <motion.p 
            className="text-center text-olive text-opacity-70 mb-10"
            variants={itemVariants}
            custom={0.1}
          >
            Estamos aquí para ti
          </motion.p>

          {/* Información de contacto */}
          <motion.div 
            className="mb-10 space-y-4"
            variants={itemVariants}
            custom={0.2}
          >
            <div className="flex items-start gap-4">
              <div className="w-1 h-1 bg-gold rounded-full mt-2.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-olive">Dirección</p>
                <p className="text-olive text-opacity-80">Sicuani, Perú, 0082</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1 h-1 bg-gold rounded-full mt-2.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-olive">Teléfono</p>
                <a href="tel:989105704" className="text-olive text-opacity-80 hover:text-olive transition-colors">
                  +51 989-105-704
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1 h-1 bg-gold rounded-full mt-2.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-olive">Email</p>
                <a href="mailto:contacto@lajuliana.com" className="text-olive text-opacity-80 hover:text-olive transition-colors">
                  contacto@lajuliana.com
                </a>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-olive border-opacity-20 my-8" />

          {/* Formulario */}
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
                className="w-full px-4 py-3 border border-olive border-opacity-30 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 bg-white text-olive placeholder-olive placeholder-opacity-50 transition-all"
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
                className="w-full px-4 py-3 border border-olive border-opacity-30 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 bg-white text-olive placeholder-olive placeholder-opacity-50 transition-all"
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
                className="w-full px-4 py-3 border border-olive border-opacity-30 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 bg-white text-olive placeholder-olive placeholder-opacity-50 transition-all resize-none"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-3 bg-olive hover:bg-olive-dark text-cream font-semibold font-serif text-lg rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              Enviar Mensaje
            </button>
          </motion.form>

          {/* Redes sociales */}
          <motion.div 
            className="border-t border-olive border-opacity-20 pt-8 flex flex-col items-center gap-6"
            variants={itemVariants}
            custom={0.4}
          >
            <p className="text-olive font-semibold">Síguenos en redes sociales</p>
            <div className="flex gap-6">
              <a 
                href="https://www.facebook.com/gatunosky?locale=es_LA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-olive hover:bg-gold text-cream hover:text-olive flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a 
                href="https://www.tiktok.com/@la.juliana26" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-olive hover:bg-gold text-cream hover:text-olive flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <FaTiktok className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Botón de regreso */}
          <motion.div 
            className="mt-10 text-center border-t border-olive border-opacity-20 pt-8"
            variants={itemVariants}
            custom={0.5}
          >
            <button 
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-transparent border-2 border-olive text-olive hover:bg-olive hover:text-cream font-semibold font-serif rounded-lg transition-all duration-300 hover:scale-105"
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
