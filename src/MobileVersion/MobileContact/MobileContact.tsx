import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './MobileContact.scss'
import { SocialIcon } from 'react-social-icons';
import axios from 'axios'

const MobileContact = (props: React.SetStateAction<boolean> | any) => {
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
  const loading = () => {
    props.setLoading(true);
    setTimeout(() => {
      props.setLoading(false);
      props.setSuccess(true);
      setTimeout(() => {
        props.setSuccess(false);
      }, 500)
    }, 1500)

  }
  return (
    <div className='MobileContact'>
      <div className='container'>
        <h2 className='contactHeader'>Get in touch!</h2>
        <div className='info'>
          <div className='block'>
            <FontAwesomeIcon icon={faEnvelope} className="infoIcon" />
            <p>kzygowski7@gmail.com</p>
          </div>
          <div className='block'>
            <FontAwesomeIcon icon={faLocationDot} className="infoIcon" />
            <p>Gdansk, Poland</p>
          </div>
        </div>
        <p className='or'>or just text me down here</p>
        <form className='mobileContactForm' onSubmit={(e) => { e.preventDefault(); loading(); post_data(e) }}>
          <input className='mobileMailerName' type="text" placeholder='Insert your name' name="name"></input>
          <input className='mobileMailerSubject' type="text" placeholder='Insert subject' name="subject"></input>
          <input className='mobileMailerMessage' placeholder='Write a message' name="message"></input>
          <input type="submit" className='submit' value="submit" />
        </form>
      </div>
      <div className='socialLinks'>
        <SocialIcon url="https://github.com/swedishsailor" className='social' />
        <SocialIcon url="https://www.facebook.com/kamil.zygowski.7/" className='social' />
        <SocialIcon url="https://www.instagram.com/szwedzkimarynarz/" className='social' />
      </div>
    </div>
  )
}

export default MobileContact