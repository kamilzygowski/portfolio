import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MobileMenu.scss';
import { faCode, faEnvelope, faGamepad, faHome, faXmark } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = (props:React.SetStateAction<boolean | any>) => {
  const routing = (keyword: any) => {
    quitMobileMenu()
    document.querySelector(`.${keyword}`)?.scrollIntoView()
  }
  const quitMobileMenu = () => {
    const body: HTMLElement = document.body
          body.style.overflow = ""
          props.setMobileMenu(false)
  }
  useEffect(() => {
    const body: HTMLElement= document.body
    body.style.overflow = "hidden"
  }, [])
  return (
    <div className='MobileMenu'>
        <ul className='mobileUl'>
            <li className='mobileLi' onClick={() => routing('MobileHero')}><div className='background'></div><FontAwesomeIcon className='icon' icon={faHome}/> <p>Home</p></li>
            <li className='mobileLi' onClick={() => routing('MobileProjects')}><div className='background'></div><FontAwesomeIcon className='icon' icon={faCode}/> <p>Projects</p></li>
            <li className='mobileLi' onClick={() => routing('MobileGames')}><div className='background'></div><FontAwesomeIcon className='icon' icon={faGamepad}/> <p>Games</p></li>
            <li className='mobileLi' onClick={() => routing('MobileContact')}><div className='background'></div><FontAwesomeIcon className='icon' icon={faEnvelope}/><p>Contact</p></li>
        </ul>
        <FontAwesomeIcon icon={faXmark} className="close" onClick={() =>{ 
          quitMobileMenu()
          }}/>
    </div>
  )
}

export default MobileMenu