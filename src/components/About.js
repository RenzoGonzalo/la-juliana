import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../stylos/About.css';

function About() {
  const navigate = useNavigate(); // Instancia el hook useNavigate

  return (
    <motion.div
      className="about-section"
      initial={{ y: '100vh' }} // Comienza desde la parte inferior
      animate={{ y: 0 }} // Se mueve hacia su posición final
      exit={{ y: '-100vh' }} // Se mueve hacia arriba al salir
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="content">
        <h2>Sobre Nosotros</h2>
        <p>
          Ubicado en las afueras de la ciudad, en un entorno campestre, nuestro restaurante ofrece una experiencia única al aire libre. Con un clima ideal para disfrutar, podrás relajarte mientras contemplas nuestro hermoso lago, el cual proporciona un ambiente tranquilo y perfecto para pasar un buen rato con la familia y amigos.
        </p>
        
        <section className="mission">
          <h3>Misión</h3>
          <p>
            Nuestra misión es ofrecer una experiencia gastronómica que combine la tradición de la comida local con un ambiente acogedor y natural. Nos dedicamos a preparar platillos deliciosos, pensados para ser compartidos, permitiendo que nuestros comensales disfruten de la comida en su mejor expresión, acompañados de buena compañía y un entorno perfecto.
          </p>
        </section>

        <section className="vision">
          <h3>Visión</h3>
          <p>
            Queremos ser el restaurante de referencia en la región para aquellos que buscan una experiencia auténtica, relajante y deliciosa. Nuestra visión es seguir ofreciendo lo mejor de la gastronomía local, destacando por nuestra hospitalidad, calidad de servicio y el hermoso entorno natural que nos rodea.
          </p>
        </section>

        <section className="values">
          <h3>Valores</h3>
          <p>
            - **Calidez y Hospitalidad**: Nos esforzamos por hacer que cada cliente se sienta como en casa, brindando un servicio amable y cercano.<br />
            - **Tradición Gastronómica**: Respetamos y preservamos las recetas tradicionales, usando ingredientes frescos y locales para crear platos que nos conectan con nuestras raíces.<br />
            - **Compromiso con la Naturaleza**: Cuidamos el entorno que nos rodea, promoviendo prácticas sostenibles y responsables con el medio ambiente.<br />
          </p>
        </section>

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
    </motion.div>
  );
}

export default About;
