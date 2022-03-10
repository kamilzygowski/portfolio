import React from 'react'
import Main from './Main/Main';
import './Home.scss';
import Hero from './Hero/Hero';

const Home = () => {
  return (
    <div className='Home'>
      <Main />
      <Hero />
    </div>
  )
}

export default Home