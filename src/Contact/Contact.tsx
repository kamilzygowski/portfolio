import React from 'react'
import './Contact.scss'

const Contact = () => {
  const handleFocus = (e:any) => {
    const inputs = document.querySelectorAll(".input")
    inputs.forEach((element) => {
      if(element.classList.contains('focused')){
        element.classList.remove('focused');
      }
    })
    // Then add focused class
    if(e.target.classList.contains('input')){
      e.target.classList.add('focused');
    }
  }
  return (
    <div className="Contact" onClick={(e) => handleFocus(e)}>
      <h2 className='contactHeader'>Contact me</h2>
      <form className='mailerForm'>
        <input className='mailerName input' type="text" placeholder='Insert your name' onFocus={(e:any) => handleFocus(e)}></input>
        <input className='mailerSubject input' type="text" placeholder='Insert subject' onFocus={(e:any) => handleFocus(e)}></input>
        <textarea className='mailerMessage input' placeholder='Write a message' onFocus={(e:any) => handleFocus(e)}></textarea>
        <button type="submit" className='mailerSubmit'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact