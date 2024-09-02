
// import viteLogo from '/vite.svg'

import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Rooms from '../pages/Rooms/Rooms';
import NotFound from '../pages/NotFound/NotFound'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/rooms" element = {<Rooms />} />
        <Route path="*" element = {<NotFound  />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App