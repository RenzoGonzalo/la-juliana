import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../stylos/Header.css';

const navLinks = [
  { to: '/about', label: 'Sobre Nosotros' },
  { to: '/experience', label: 'Experiencia' },
  { to: '/contact', label: 'Contacto' },
];

function Header() {
  const [isBlurred, setIsBlurred] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const base = process.env.PUBLIC_URL || '';
  const isHome = location.pathname === '/';

  useEffect(() => {
    setIsBlurred(!isHome);
  }, [isHome]);

  if (!isHome) {
    return (
      <header className="sticky top-0 z-30 bg-cream/90 backdrop-blur-md border-b border-gold/15">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <motion.button
            type="button"
            onClick={() => navigate('/')}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
            aria-label="Volver al inicio"
          >
            <div
              className="w-10 h-10 rounded-full border border-dark-bg/10 bg-cover bg-center"
              style={{
                backgroundImage: `image-set(url(${base}/logolajuliana.webp) type('image/webp'), url(${base}/logolajuliana.png) type('image/png'))`,
              }}
            />
            <div className="text-[11px] tracking-[0.28em] uppercase font-semibold text-dark-bg/70">
              La Juliana
            </div>
          </motion.button>

          <ul className="flex items-center gap-6 md:gap-10">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => `
                    group relative pb-2 text-xs md:text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300
                    ${isActive ? 'text-dark-bg' : 'text-dark-bg/65 hover:text-dark-bg'}
                  `}
                >
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[1.5px] transition-all duration-300 ${
                      location.pathname === to ? 'w-full bg-gold' : 'w-0 bg-gold group-hover:w-full'
                    }`}
                  />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }

  return (
    <header className="relative min-h-screen overflow-hidden text-cream">
      <div className={`absolute inset-0 transition-all duration-500 ${isBlurred ? 'blur-[2px] opacity-90' : 'opacity-100'}`}>
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `image-set(url(${base}/vistapanoramica.webp) type('image/webp'), url(${base}/vistapanoramica.png) type('image/png'))`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen backdrop-blur-[1px]">
        <nav className="flex items-center justify-between px-6 md:px-12 py-6">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full border border-cream/40 bg-cover bg-center"
              style={{
                backgroundImage: `image-set(url(${base}/logolajuliana.webp) type('image/webp'), url(${base}/logolajuliana.png) type('image/png'))`,
              }}
              role="img"
              aria-label="Logo de La Juliana"
            />
            <div className="text-xs tracking-[0.25em] uppercase font-medium text-amber-100/70">
              La Juliana
            </div>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="flex items-center gap-6 md:gap-10"
          >
            {navLinks.map(({ to, label }) => (
              <motion.li
                key={to}
                variants={{ hidden: { opacity: 0, y: -6 }, visible: { opacity: 1, y: 0 } }}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) => `
                    group relative pb-2 text-sm md:text-base tracking-[0.2em] uppercase font-semibold transition-all duration-300
                    ${isActive ? 'text-gold' : 'text-amber-100/80 hover:text-gold'}
                  `}
                >
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[1.5px] transition-all duration-300 ${
                      location.pathname === to ? 'w-full bg-gold' : 'w-0 bg-gold group-hover:w-full'
                    }`}
                  />
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <div className="flex-1 grid place-items-center px-6 md:px-12 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl text-center space-y-6"
          >
            <p className="text-sm md:text-base uppercase tracking-[0.35em] text-amber-100/70">
              Cocina de lago y fuego
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight">
              Sabores de altura en Sicuani
            </h1>
            <p className="text-lg md:text-xl text-amber-100/80 leading-relaxed">
              Una mesa tranquila, ingredientes del valle y un servicio que deja respirar cada momento. Un refugio
              gastronómico a orillas del lago.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 pt-2">
              <button
                onClick={() => navigate('/about')}
                className="px-6 py-3 md:px-8 md:py-3 bg-gold text-dark-bg font-serif font-semibold rounded-full shadow-lg shadow-black/20 hover:bg-amber-200 transition-all duration-300 hover:-translate-y-0.5"
              >
                Conocer la casa
              </button>
              <button
                onClick={() => navigate('/experience')}
                className="px-6 py-3 md:px-8 md:py-3 border border-amber-100/40 text-amber-50 rounded-full hover:border-gold hover:text-gold transition-all duration-300 hover:-translate-y-0.5"
              >
                Ver experiencia
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Header;
