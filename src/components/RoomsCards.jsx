import React from 'react'
import PropTypes from 'prop-types' // Importation de PropTypes pour définir les types des props
import { Link } from 'react-router-dom'; // Importation de Link pour créer des liens vers les différentes pages

function RoomsCards({logements}) {
  return (
    logements.map((logement) => ( // Utilisation de la méthode map() pour itérer sur le tableau 'logements' et créer une carte pour chaque logement
      <Link to={`/rooms/${logement.id}`} key={logement.id}>  {/* // Le composant Link permet de créer un lien vers la page détaillée de chaque logement, avec l'ID dynamique */}
        <div className="rooms-cards">
          <img src={logement.cover} alt={logement.title} />
          <h2>{logement.title}</h2>
        </div>
      </Link>
    ))
  );
};

RoomsCards.propTypes = {
  logements: PropTypes.array.isRequired
}

export default RoomsCards