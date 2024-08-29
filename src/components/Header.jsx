import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <img src="Logo.png" alt="Logo Kasa" />
      <nav>
        <ul>
            <NavLink to="/"><li>Accueil</li></NavLink>
            <NavLink to="/about"><li>A propos</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Header