import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';
import Carrosel from '../../components/Carrosel';

function findLogement(id) {
  return logements.find(logement => logement.id === id);
}

function Rooms() {
  // Récupérer l'ID de la chambre depuis les paramètres de l'URL
  const {id} = useParams();
  // Trouver la chambre correspondante dans la liste des chambres
  const logement = findLogement(id);

  const navigate = useNavigate();

  //rediriger vers la page Error si la chambre n'existe pas
  useEffect(() => {
    if (!logement) {
      navigate("/error");
    }
  }, [id, logement, navigate]);
    // Vérifiez si location est défini avant d'accéder à ses propriétés
    if (!logement) {
      return null; // Ou affichez un composant d'erreur approprié
    }


  return (
    <div className='rooms'>
      <div className='slider'>
        <Carrosel pictures={logement.pictures} />
      </div>
      <div className='composents'> 
        <div className='composents-up'>
          <div className='composents-up-left'>
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
            <div className='tags'>
              {logement.tags.map((tag, index) => (
                <ul key={index}>
                  <li>{tag}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className='composents-up-right'>
            <div className='host'>
              <h3>{logement.host.name}</h3>
              <img src={logement.host.picture} alt={logement.host.name}/>
            </div>
            <div className='rating'>
              <Rating rating={logement.rating} />
            </div>
          </div>
        </div>
        <div className='composents-down'>
          <div><Collapse title='Description' content={logement.description} /></div>
          <div className='equipements'>
            <Collapse title='Equipements' content={logement.equipments.map((equipement, index) => (
                <ul key={index}>
                  <li>{equipement}</li>
                </ul>
            ))} />
          </div>
        </div>
    </div>
  </div>
  )
}

export default Rooms