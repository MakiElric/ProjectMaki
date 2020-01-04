import React from 'react';
import '../assets/styles/components/header.scss';

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <span className="header__logo--nombre">Maki Project</span>
    </div>
    <div className="header__menu">
      <ul className="header__lista">
        <li className="header__elemento">Inicio</li>
        <li className="header__elemento">Perfil</li>
        <li className="header__elemento">Tareas</li>
        <li className="header__elemento">Herramientas</li>
      </ul>
    </div>
  </header>
);

export default Header;
