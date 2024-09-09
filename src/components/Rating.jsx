import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../sass/rating.scss';

function Rating({ rating }) {
    // Icone pour une étoile vide
    const emptyIcon =  <FontAwesomeIcon icon={faStar} className="star-empty" />
    
    // Icone pour une étoile pleine
    const fullIcon = <FontAwesomeIcon icon={faStar} className="star-full" />

    // Fonction pour générer et afficher les étoiles en fonction du rating
    const renderStars = () => {
        // Générer les étoiles pleines en fonction du rating
        const filledStars = Array.from({ length: rating }, (_, index) => (
            <span key={index}>{fullIcon}</span> // étoile pleine
        ))

        // Générer les étoiles vides pour compléter jusqu'à 5 étoiles(le max)
        const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
            <span key={index + rating}>{emptyIcon}</span> // étoile vide
        ))

        // Fusionner les étoiles pleines et vides pour créer la représentation complète
        return [...filledStars, ...emptyStars]
    }

    // Rendu du composant avec les étoiles générées
    return (
        <div>
            {renderStars()}
        </div>
    )
}


Rating.propTypes = {
    rating: PropTypes.number
}

export default Rating