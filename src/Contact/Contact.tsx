import React from 'react'
import './Contact.scss'
import axios from 'axios'

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
  const post_data = (data: any) => {
    
    axios.post('https://mailer3.herokuapp.com/mail', {
      name : data.target[0].value,
      subject : data.target[1].value,
      message : data.target[2].value
    })
    .then((res:any)=> {
      console.log(res)
    })
    
  }

  return (
    <div className="Contact" onClick={(e) => handleFocus(e)}>
      <img src="https://i.postimg.cc/02tWmxGq/contact.png" alt="header" className='contactHeader'/>
      <form className='mailerForm' autoComplete='off' onSubmit={(e)=> {e.preventDefault();post_data(e)}}>
        <input className='mailerName input' type="text" placeholder='Insert your name' name="name" onFocus={(e:any) => handleFocus(e)}></input>
        <input className='mailerSubject input' type="text" placeholder='Insert subject' name="subject" onFocus={(e:any) => handleFocus(e)}></input>
        <textarea className='mailerMessage input' placeholder='Write a message' name="message" onFocus={(e:any) => handleFocus(e)}></textarea>
        <button type="submit" className='mailerSubmit'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact