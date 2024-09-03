import React from 'react'
import Collapse from '../../components/Collapse';

function About() {
  return (
    <div className='About'>
      <div className='banner'>
        <img src="/About-Banner.png" alt="Banner" />
      </div>
      <div className="aboutPage__content">
                <Collapse title="Fiabilité" content={
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</p>
                }/>
                <Collapse title="Respect" content={
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme</p>
                }/>
                 <Collapse title="Service" content={
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme</p>
                }/>
                <Collapse title="Securité" content={
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs. Chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note ausii bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.nous organisons egalement des ateliers sur la sécurité domestique pour nos hôtes</p>
                }/>
            </div>
        </div>
  )
}

export default About;