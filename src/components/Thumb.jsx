import React from 'react'
import PropTypes from 'prop-types'

function Thumb({Logements}) {
  return (
      Logements.map((logement) => (
        <div className="thumb" key={logement.id}>
          <img src={logement.cover} alt={logement.title} />
          <h2>{logement.title}</h2>
        </div>
      ))
  );
}

Thumb.propTypes = {
  Logements: PropTypes.array.isRequired
}

export default Thumb