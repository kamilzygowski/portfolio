import { faEnvelope, faEnvelopeOpenText, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './MobileContact.scss'
import { SocialIcon } from 'react-social-icons';

const MobileContact = () => {
  return (
    <div className='MobileContact'>
      <div className='container'>
      <h2 className='contactHeader'>Get in touch!</h2>
      <div className='info'>
          <div className='block'>
            <FontAwesomeIcon icon={faEnvelope} className="infoIcon"/>
            <p>kzygowski7@gmail.com</p>
          </div>
          <div className='block'>
            <FontAwesomeIcon icon={faLocationDot} className="infoIcon"/>
            <p>Gdansk, Poland</p>
          </div>
        </div>
        <p className='or'>or just text me down here</p>
      <form className='mobileContactForm'>
      <input className='mobileMailerName' type="text" placeholder='Insert your name' name="name"></input>
        <input className='mobileMailerSubject' type="text" placeholder='Insert subject' name="subject"></input>
        <input className='mobileMailerMessage' placeholder='Write a message' name="message"></input>
        <input type="submit" className='submit' value="submit"/>
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