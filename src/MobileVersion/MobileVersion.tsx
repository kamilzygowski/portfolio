import React, { useState } from 'react'
import './MobileVersion.scss'
import MobileContact from './MobileContact/MobileContact'
import MobileGames from './MobileGames/MobileGames'
import MobileHero from './MobileHero/MobileHero'
import MobileProjects from './MobileProjects/MobileProjects'
import MobileMenu from './MobileMenu/MobileMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBabyCarriage, faBarChart, faBarcode, faBars, faBarsProgress, faBarsStaggered, faBraille, faStar } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';

const MobileVersion = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [changedIcon, setIconChange] = useState(false);
  return (
    <div className="MobileVersion">
        <FontAwesomeIcon icon={changedIcon ? faStar : faBarsStaggered} className="bars" onClick={() => setMobileMenu(true)} onMouseEnter={() => setIconChange(true)} onMouseLeave={() => setIconChange(false)}/>
        {mobileMenu ? <MobileMenu setMobileMenu={setMobileMenu}/> : null}
        <MobileHero/>
        <MobileProjects />
        <MobileGames />
        <MobileContact />
    </div>
  )
}

export default MobileVersion