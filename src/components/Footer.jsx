import React from 'react'
import footerLogo from '/Logo/Logo-footer.svg' // Importation de l'image du logo de Kasa

function Footer() {
  return (
    <div className='footer'>
        <img src={footerLogo}  alt="Logo Kasa" />   {/* Affichage du logo de Kasa */}
        <h3>© 2020 Kasa. All rights reserved</h3> {/* Affichage du message de droits d'auteur */}
    </div>
  )
}

export default Footer