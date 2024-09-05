import React from 'react'
import RoomsCards from '../../components/RoomsCards'
import logements from '../../data/logements.json'

function Home() {
  return (
    <div className='home'> 
      <div className='banner'>
        <img src="./Home-Banner.jpg" alt="Banner" />
        <h1> Chez vous, partout et ailleurs</h1>
      </div>
      <div className='gallery'>
        <RoomsCards logements={logements} />
      </div>
    </div>
  )
}

export default Home