import React from 'react'
import { NavLink } from 'react-router-dom'; // Importation de NavLink pour créer des liens vers les différentes pages
import logo from '/Logo/Logo.png'   // Importation de l'image du logo de Kasa

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <ul>        {/* Utilisation de NavLink pour créer des liens vers les différentes pages */}
            <NavLink to="/"><li>Accueil</li></NavLink> 
            <NavLink to="/about"><li>A Propos</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Header