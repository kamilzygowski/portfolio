import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MobileMenu.scss';
import { faCode, faEnvelope, faGamepad, faHome, faXmark } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = (props:React.SetStateAction<boolean | any>) => {
  useEffect(() => {
    const body: HTMLElement= document.body
    body.style.overflow = "hidden"
  }, [])
  return (
    <div className='MobileMenu'>
        <ul className='mobileUl'>
            <li className='mobileLi'><div className='background'></div><FontAwesomeIcon className='icon' icon={faHome}/> <p>Home</p></li>
            <li className='mobileLi'><div className='background'></div><FontAwesomeIcon className='icon' icon={faCode}/> <p>Projects</p></li>
            <li className='mobileLi'><div className='background'></div><FontAwesomeIcon className='icon' icon={faGamepad}/> <p>Games</p></li>
            <li className='mobileLi'><div className='background'></div><FontAwesomeIcon className='icon' icon={faEnvelope}/><p>Contact</p></li>
        </ul>
        <FontAwesomeIcon icon={faXmark} className="close" onClick={() =>{ 
          const body: HTMLElement = document.body
          body.style.overflow = ""
          props.setMobileMenu(false)
          }}/>
    </div>
  )
}

export default MobileMenu