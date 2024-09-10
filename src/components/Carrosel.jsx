import React from 'react'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Carrosel({ pictures }) {
    // slides et un tableau qui contient le lien pour chaque image du caroussel
    const [index, setIndex] = useState(0)
    // index est un entier qui represente l'index de l'image affichee
    // setIndex est une fonction qui permet de changer la valeur de l'index
    
    // initialisation de l'index a 0
    const next = () => {
        setIndex((index + 1) % pictures.length)
    }
    // next est une fonction qui permet de passer a l'image suivante
    // si on est a la derniere image, on revient a la premiere image
    const prev = () => {
        setIndex((index - 1 + pictures.length) % pictures.length)
    }
    // prev est une fonction qui permet de passer a l'image precedente
    // si on est a la premiere image, on revient a la derniere image

    // Nombre total d'images
    const totalPictures = pictures.length

    return (
        <div className='carrosel'>
            <img className="slides" src={pictures[index]} alt='carrosel' />
            {totalPictures > 1 && (
            <div className='carrosel_buttons'>
                <button onClick={prev}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={next}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            )}
            {/* Affichage du compteur seulement s'il y a plus d'une seule image */}
            {totalPictures > 1 && (
                <div className='carrosel_counter'>
                    {index + 1} / {totalPictures}
                </div>
            )}

        </div>
    )

}

export default Carrosel