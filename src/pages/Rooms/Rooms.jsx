import React, { useEffect } from 'react' // Importation de useEffect pour effectuer des effets de bord
import { useNavigate, useParams } from 'react-router-dom'; // Importation de useNavigate et useParams pour la navigation et la récupération des paramètres de l'URL
import logements from '../../data/logements.json'; 
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';
import Carrosel from '../../components/Carrosel';

const findLogement = (id) => logements.find((logement) => logement.id === id);

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
    window.scrollTo(0, 0);
  });
    // Vérifiez si location est défini avant d'accéder à ses propriétés
    if (!logement) {
      return null; // Ou affichez un composant d'erreur approprié
    }


  return (
    <div className='rooms'>
      <div className='slider'>
        <Carrosel pictures={logement.pictures} /> {/* Affichage du carrousel d'images du logement */}
      </div>
      <div className='composents'> 
        <div className='composents-up'>
          <div className='composents-up-left'>
            <h1>{logement.title}</h1> {/* Titre du logement */}
            <h2>{logement.location}</h2> {/* Localisation du logement */}
            <div className='tags'> 
              {logement.tags.map((tag, index) => ( //* Utilisation de la méthode map pour parcourir le tableau de tags et les afficher dans une liste
                <ul key={index}> {/* utilisation de key pour éviter les erreurs */}
                  <li>{tag}</li> {/* Affichage des tags dans une liste non ordonnée */}
                </ul>
              ))}
            </div>
          </div>
          <div className='composents-up-right'>
            <div className='host'>
              <h3>{logement.host.name}</h3> {/* Nom de l'hôte */}
              <img src={logement.host.picture} alt={logement.host.name}/> {/* Photo de l'hôte */}
            </div>
            <div className='rating'>
              <Rating rating={Number(logement.rating)} /> {/* utilisation de Rating pour afficher les étoiles et Number pour convertir la note en nombre */} 
            </div>
          </div>
        </div>
        <div className='composents-down'>
          <div><Collapse title='Description' content={logement.description} /></div>  {/* Utilisation de Collapse pour afficher la description du logement */}
          <div className='equipements'>
            <Collapse title='Equipements' content={logement.equipments.map((equipement, index) => ( // Utilisation de Collapse pour afficher les équipements du logement
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