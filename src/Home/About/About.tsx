import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div className='About'>
      {/*<p className='about'>
        Greetings! My name is Kamil, I am 23 years old psychologist, frontend developer living in Gdańsk, Poland.
      </p>
      <p>I love : juggling , making PixelArt-style graphics , learning about human perception , 
  watching anime , coding and of course both playing and making computer games!</p>*/}
  <img className='aboutHello' src="https://i.postimg.cc/wxkksp9r/portfolio-hello.png" alt="Hello"/>
   <p> my name is Kamil</p>
    <p>Psychologist and frontend developer </p>
    <p> You can find me in Gdańsk, Poland</p>
    </div>
  )
}

export default About