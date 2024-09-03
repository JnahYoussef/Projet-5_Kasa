import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function RoomsCards({Logements}) {
  return (
      Logements.map((logement) => (
        <Link to={`/rooms`}>
          <div className="rooms-cards" key={logement.id}>
            <img src={logement.cover} alt={logement.title} />
            <h2>{logement.title}</h2>
          </div>
        </Link>
      ))
  );
}

RoomsCards.propTypes = {
  Logements: PropTypes.array.isRequired
}

export default RoomsCards