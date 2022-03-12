import React from 'react'
import Main from './Main/Main';
import './Home.scss';
import Hero from './Hero/Hero';
import About from './About/About';

const Home = () => {
  return (
    <div className='Home'>
      <div className='main'>
      <About />
      <Hero />
      <Main />
      </div>
    </div>
  )
}

export default Home