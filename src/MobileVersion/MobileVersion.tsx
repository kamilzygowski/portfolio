import React, { useState } from 'react'
import './MobileVersion.scss'
import MobileContact from './MobileContact/MobileContact'
import MobileGames from './MobileGames/MobileGames'
import MobileHero from './MobileHero/MobileHero'
import MobileProjects from './MobileProjects/MobileProjects'
import MobileMenu from './MobileMenu/MobileMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faStar } from '@fortawesome/free-solid-svg-icons';
import MobileFooter from './MobileFooter/MobileFooter'

const MobileVersion = () => {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [changedIcon, setIconChange] = useState<boolean>(false);
  return (
    <div className="MobileVersion">
      <div className='backgroundsContainer'>
      <div className='background'></div>
      <div className='background'></div>
      <div className='background'></div>
      <div className='background'></div>
      <div className='background'></div>
      </div>

        <FontAwesomeIcon icon={changedIcon ? faStar : faBarsStaggered} className="bars" onClick={() => setMobileMenu(true)} onMouseEnter={() => setIconChange(true)} onMouseLeave={() => setIconChange(false)}/>
        {mobileMenu ? <MobileMenu setMobileMenu={setMobileMenu}/> : null}
        <MobileHero/>
        <MobileProjects />
        <MobileGames />
        <MobileContact />
        <MobileFooter />
    </div>
  )
}
export default MobileVersion