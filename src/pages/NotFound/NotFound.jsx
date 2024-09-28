import React from 'react'
import { Link } from 'react-router-dom' // Importation de Link pour créer des liens vers les différentes pages

function NotFound() {
  return (
    <div className='notFound'>
      <h1>404</h1> {/* Code d'erreur */}
      <h2>
        <span>Oups! La page que </span>vous demandez n'existe pas.
      </h2> {/* Message d'erreur */}
      <Link to='/'>Retourner sur la page d'accueil</Link> {/* Lien pour retourner à la page d'accueil */}
    </div>
  )
}

export default NotFound