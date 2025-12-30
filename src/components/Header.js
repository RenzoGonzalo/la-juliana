import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../stylos/Header.css';

function Header() {
  const [isBlurred, setIsBlurred] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsBlurred(location.pathname !== '/');
  }, [location.pathname]);

  return (
    <header className="header-container">
      <div className={`absolute inset-0 ${isBlurred ? 'blur-sm' : ''} transition-all duration-300`}>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/vistapanoramica.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="mb-8 md:mb-12">
          <div 
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 md:border-8 border-white bg-center bg-cover"
            style={{ backgroundImage: 'url(/logolajuliana.png)' }}
            role="img"
            aria-label="Logo de La Juliana"
          />
        </div>

        {/* Título */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-gold text-center drop-shadow-lg mb-12 tracking-widest">
          La Juliana
        </h1>

        {/* Navegación */}
        <nav className="relative z-20">
          <ul className="flex flex-col md:flex-row gap-6 md:gap-10 text-center">
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `
                  font-serif text-xl md:text-2xl font-semibold transition-all duration-300
                  ${isActive 
                    ? 'text-gold drop-shadow-lg' 
                    : 'text-amber-100 hover:text-gold hover:scale-110'
                  }
                `}
              >
                Sobre Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/experience" 
                className={({ isActive }) => `
                  font-serif text-xl md:text-2xl font-semibold transition-all duration-300
                  ${isActive 
                    ? 'text-gold drop-shadow-lg' 
                    : 'text-amber-100 hover:text-gold hover:scale-110'
                  }
                `}
              >
                Experiencia
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `
                  font-serif text-xl md:text-2xl font-semibold transition-all duration-300
                  ${isActive 
                    ? 'text-gold drop-shadow-lg' 
                    : 'text-amber-100 hover:text-gold hover:scale-110'
                  }
                `}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
