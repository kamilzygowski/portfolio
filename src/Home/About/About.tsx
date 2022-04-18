import React from 'react'
import './About.scss'

const About = () => {

const preventEvents = (e:any) => {
  e.preventDefault();
}
  return (
    <div className='About'>
      {/*<p className='about'>
        Greetings! My name is Kamil, I am 23 years old psychologist, frontend developer living in Gdańsk, Poland.
      </p>
      <p>I love : juggling , making PixelArt-style graphics , learning about human perception , 
  watching anime , coding and of course both playing and making computer games!</p>*/}
  <img className='aboutHello' src="https://i.postimg.cc/5NDkkZRH/Comp-22-00000.png" alt="Hello"/>
<div className='mirror'></div>
{/*<div className='imKamil'><iframe src="https://streamable.com/e/7nq84c?autoplay=1&nocontrols=1" width="100%" height="100%" allow="autoplay"></iframe></div>*/}
<img src="https://i.postimg.cc/WpWM3s2K/Comp-1-00000.gif" alt="imKamil" className='imKamil'/>
  {/*<div className='livingInGdansk'><iframe src="https://streamable.com/e/bezfkl?autoplay=1&nocontrols=1" width="100%" height="100%" allow="autoplay"></iframe></div>*/}
  <img src="https://i.postimg.cc/QN2QLhjr/morph-00001.gif" alt="livingInGdansk" className='livingInGdansk'/>
</div>
  )
}

export default About