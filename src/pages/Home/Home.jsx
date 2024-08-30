import React from 'react'
import Thumb from '../../components/thumb'
import Logements from '../../data/Logements.json'

function Home() {
  return (
    <div className='home'> 
      <div className='banner'>
        <img src="./Banner.jpg" alt="Banner" />
        <h1> Chez vous, partout et ailleurs</h1>
      </div>
      <div className='gallery'>
        <Thumb Logements={Logements} />
      </div>
    </div>
  )
}

export default Home