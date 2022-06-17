import React from 'react'
import './Home.scss';
import Hero from './Hero/Hero';
import About from './About/About';

const Home = () => {
  return (
    <div className='Home' id="home">
      <div className='main'>
        <About />
        <Hero />
      </div>
    </div>
  )
}

export default Home