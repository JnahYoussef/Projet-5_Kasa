import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importation des composants de react-router-dom pour gérer le routage
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Rooms from '../pages/Rooms/Rooms';
import NotFound from '../pages/NotFound/NotFound'


function App() {
  return (
    <BrowserRouter> {/* BrowserRouter englobe toute l'application pour permettre la gestion du routage avec react-router-dom */}
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} /> {/* Route pour la page d'accueil, correspondant au chemin "/", qui rend le composant Home */}
        <Route path="about" element = {<About />} />  {/* Route pour la page "About", qui affiche le composant About */}
        <Route path="rooms/:id" element = {<Rooms />} /> {/* Route dynamique pour les pages des différentes chambres (rooms), en fonction de l'ID */}
        <Route path="*" element = {<NotFound  />} /> {/* Route de gestion des erreurs 404, si aucune autre route ne correspond */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App