import React from 'react'
import RoomsCards from '../../components/RoomsCards' // Importation du composant RoomsCards
import logements from '../../data/logements.json' // Importation des données des logements

function Home() {
  return (
    <div className='home'> 
      <div className='banner'>
        <img src="./Home-Banner.jpg" alt="Banner" />
        <h1> 
          <span >Chez vous, </span><span>partout et ailleurs</span>
        </h1>
      </div>
      <div className='gallery'> {/* Section pour afficher les différents logements disponibles */}
        <RoomsCards logements={logements} /> {/* On passe les données des logements en props au composant RoomsCards */}
      </div>
    </div>
  )
}

export default Home