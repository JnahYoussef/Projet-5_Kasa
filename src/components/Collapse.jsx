
import React, { useState } from 'react' // Importation du hook useState pour gérer l'état du composant
import PropTypes from 'prop-types' // Importation de PropTypes pour définir les types des props

//import des icons de la librairie fontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

// Définition du composant de collapsible (collapse)
function Collapse({ title, content }) {
    // State pour gérer l'état ouvert/fermé du collapsible
    const [isOpen, setIsOpen] = useState(false)

    // Fonction pour basculer entre l'état ouvert et fermé du collapsible
    const toggleSection = () => {
        setIsOpen(!isOpen)
    }

    // Rendu du composant collapsible
    return (
        <div className="collapse" onClick={toggleSection}>
            {/* Section du titre avec une flèche indiquant l'état ouvert/fermé */}
            <div className="collapse__title">
                <p>{title}</p>
                {/* La classe 'collapse__title--down' est ajoutée si le collapsible est ouvert */}
                <FontAwesomeIcon icon={faChevronDown} className={`collapse__title--up ${isOpen ? 'collapse__title--down' : ''}`} />
            </div>
            {/* Section du contenu avec une classe 'collapse__content--open' si le collapsible est ouvert */}
            <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
                {content}
            </div>
        </div>
    )
}

Collapse.propTypes = {
    content: PropTypes.node, // Accepte du texte, JSX, ou tout ce qui peut être rendu
    title: PropTypes.string.isRequired // Le titre est requis et doit être une chaîne de caractères
}

export default Collapse