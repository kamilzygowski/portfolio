import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MobileMenu.scss';
import { faCode, faEnvelope, faGamepad, faHome, faXmark } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = (props:any) => {
  return (
    <div className='MobileMenu'>
        <ul className='mobileUl'>
            <li className='mobileLi'><FontAwesomeIcon icon={faHome}/> Home</li>
            <li className='mobileLi'><FontAwesomeIcon icon={faCode}/> Projects</li>
            <li className='mobileLi'><FontAwesomeIcon icon={faGamepad}/> Games</li>
            <li className='mobileLi'><FontAwesomeIcon icon={faEnvelope}/> Contact</li>
        </ul>
        <FontAwesomeIcon icon={faXmark} className="close" onClick={() => props.setMobileMenu(false)}/>
    </div>
  )
}

export default MobileMenu