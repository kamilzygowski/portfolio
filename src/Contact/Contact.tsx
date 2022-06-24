import React from 'react'
import './Contact.scss'
import axios from 'axios'
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  const handleFocus = (e: MouseEvent | any) => {
    const inputs = document.querySelectorAll(".input")
    inputs.forEach((element) => {
      if (element.classList.contains('focused')) {
        element.classList.remove('focused');
      }
    })
    // Then add focused class
    if (e.target.classList.contains('input')) {
      e.target.classList.add('focused');
    }
  }
  const post_data = (data: any) => {
    axios.post('http://70.34.243.228:8000/mail', {
      name: data.target[0].value,
      subject: data.target[1].value,
      message: data.target[2].value
    })
      .then((res) => {
        //console.log(res)
      })

  }
  return (
    <div className="Contact" onClick={(e) => handleFocus(e)}>
      <div className='container'>
        <form className='mailerForm' autoComplete='off' onSubmit={(e) => { e.preventDefault(); post_data(e) }}>
          <img src="https://i.postimg.cc/Pq6bhpSd/contact.webp" alt="header" className='contactHeader' />
          <div className='narrowInputs'>
            <div className='inputWrapper'>
              <label>Name</label>
              <input className='mailerName input' type="text" placeholder='Insert your name' name="name" onFocus={(e) => handleFocus(e)}></input>
            </div>
            <div className='inputWrapper'>
              <label>Subject</label>
              <input className='mailerSubject input' type="text" placeholder='Insert subject' name="subject" onFocus={(e) => handleFocus(e)}></input>
            </div>
          </div>
          <div className='inputWrapper'>
            <label>Message</label>
            <textarea className='mailerMessage input' placeholder='Write a message' name="message" onFocus={(e) => handleFocus(e)}></textarea>
          </div>
          <button type="submit" className='mailerSubmit'>Send Message</button>
        </form>
        <div className='info'>
          <div className='infoWrapper'>
            <img alt="localization" className='localizationGif' src="https://i.postimg.cc/RVXDkGbR/newlocal.gif" />
          </div>
          <div className='infoWrapper'>
            <FontAwesomeIcon icon={faEnvelope} className="infoIcon" />
            <p className="sideInfo">kzygowski7@gmail.com</p>
          </div>
          <div className='infoWrapper'>
            <FontAwesomeIcon icon={faGlobe} className="infoIcon" />
            <p className="sideInfo">Gdansk, Poland, 80-177</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact