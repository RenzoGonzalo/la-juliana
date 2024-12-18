import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Importación necesaria para el botón de navegación
import '../stylos/Experience.css';

function Experience() {
  const navigate = useNavigate(); // Inicializar navigate para manejar la navegación

  return (
    <motion.section
      id="experience"
      className="experience-section"
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '-100vh' }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="container">
        <h2 className="experience-title">Experiencia</h2>
        <p className="experience-description">
          Disfruta de una experiencia gastronómica única, donde cada platillo es preparado 
          con pasión y dedicación. ¡Ven y vive La Juliana!
        </p>
        <div className="experience-images">
          <img src="/trucha.png" alt="Plato 1" className="experience-image" />
          <img src="/lago.png" alt="Plato 2" className="experience-image" />
          <img src="/chicharron.png" alt="Plato 3" className="experience-image" />
          <img src="/piedras.png" alt="Plato 4" className="experience-image" />
        </div>
        {/* Botón para regresar al header */}
        <button
          onClick={() => navigate('/header')}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Volver a Header
        </button>
      </div>
    </motion.section>
  );
}

export default Experience;
