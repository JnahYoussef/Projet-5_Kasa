import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '/Logo/Logo.png'

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <ul>
            <NavLink to="/"><li>Accueil</li></NavLink>
            <NavLink to="/about"><li>A Propos</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Header