import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../stylos/Contact.css';

function Contact() {
  const navigate = useNavigate(); // Instancia el hook useNavigate

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '-100vh' }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="content">
        <h2>Contáctanos</h2>
        <p><strong>Dirección:</strong> Calle 123, Ciudad X</p>
        <p><strong>Teléfono:</strong> 123-456-789</p>
        <p><strong>Email:</strong> contacto@lajuliana.com</p>
        <form className="contact-form">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo Electrónico" required />
          <textarea placeholder="Escribe tu mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
        {/* Botón para regresar */}
        <button 
          onClick={() => navigate('/header')} 
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Volver a Header
        </button>
      </div>
    </motion.section>
  );
}

export default Contact;
