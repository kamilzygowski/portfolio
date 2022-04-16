import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MobileMenu.scss';
import { faCode, faEnvelope, faGamepad, faHome } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = () => {
  return (
    <div className='MobileMenu'>
        <ul className='mobileUl'>
            <li className='mobileLi'><FontAwesomeIcon icon={faHome}/> Home</li>
            <li className='mobileLi'><FontAwesomeIcon icon={faCode}/> Projects</li>
            <li className='mobileLi'><FontAwesomeIcon icon={faGamepad}/> Games</li>
            <li className='mobileLi'><FontAwesomeIcon icon={faEnvelope}/> Contact</li>
        </ul>
    </div>
  )
}

export default MobileMenu