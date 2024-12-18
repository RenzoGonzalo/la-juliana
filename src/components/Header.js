// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylos/Header.css';

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="background-image"></div>
        <div className="nav-content">
          <img src="/logolajuliana.png" alt="Logo La Juliana" className="logo" />
          <h1>La Juliana</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Sobre Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Experiencia
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
