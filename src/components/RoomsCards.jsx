import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function RoomsCards({logements}) {
  return (
    logements.map((logement) => (
      <Link to={`/rooms/${logement.id}`}>
        <div className="rooms-cards" key={logement.index}>
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