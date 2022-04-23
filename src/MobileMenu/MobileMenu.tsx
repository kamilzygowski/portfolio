import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MobileMenu.scss';
import { faCode, faEnvelope, faGamepad, faHome, faXmark } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = (props:any) => {
  return (
    <div className='MobileMenu'>
        <ul className='mobileUl'>
            <li className='mobileLi'><div className='background'></div><FontAwesomeIcon className='icon' icon={faHome}/> <p>Home</p></li>
            <li className='mobileLi'><div className='background'></div><FontAwesomeIcon className='icon' icon={faCode}/> <p>Projects</p></li>
            <li className='mobileLi'><div className='background'></div><FontAwesomeIcon className='icon' icon={faGamepad}/> <p>Games</p></li>
            <li className='mobileLi'><div className='background'></div><FontAwesomeIcon className='icon' icon={faEnvelope}/><p>Contact</p></li>
        </ul>
        <FontAwesomeIcon icon={faXmark} className="close" onClick={() => props.setMobileMenu(false)}/>
    </div>
  )
}

export default MobileMenu