import React from 'react'
import PropTypes from 'prop-types'

function RoomsCards({Logements}) {
  return (
      Logements.map((logement) => (
        <div className="rooms-cards" key={logement.id}>
          <img src={logement.cover} alt={logement.title} />
          <h2>{logement.title}</h2>
        </div>
      ))
  );
}

RoomsCards.propTypes = {
  Logements: PropTypes.array.isRequired
}

export default RoomsCards