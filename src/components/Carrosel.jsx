import React from 'react'
import { useState } from 'react' // Importation du hook useState pour gérer l'état du composant

// Importation des icônes SVG
import ArrowLeft from '/Icons/arrowLeft.svg';
import ArrowRight from '/Icons/arrowRight.svg';

function Carrosel({ pictures }) {
    // slides est un tableau qui contient le lien pour chaque image du caroussel
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
            <img className="slides" src={pictures[index]} alt='carrosel' />  {/* Affichage de l'image en fonction de l'index actuel du tableau 'pictures' */}
            {totalPictures > 1 && ( // Affichage des boutons de navigation seulement si le total d'images est supérieur à 1
            <div className='carrosel_buttons'>
                {/* Bouton pour naviguer vers l'image précédente, déclenche la fonction 'prev' */}
                <button onClick={prev}>  {/* Lorsque l'utilisateur clique sur le bouton, la fonction 'prev' est déclenchée */}
                    <img src={ArrowLeft} alt="Précédent" />
                </button>
                {/* Bouton pour naviguer vers l'image suivante, déclenche la fonction 'next' */}
                <button onClick={next}>
                    <img src={ArrowRight} alt="Suivant" />
                </button>
            </div>
            )}
            {totalPictures > 1 && ( // Affichage du compteur (index actuel / total des images) seulement si le total d'images est supérieur à 1
                <div className='carrosel_counter'>
                    {index + 1} / {totalPictures}
                </div>
            )}

        </div>
    )

}

export default Carrosel