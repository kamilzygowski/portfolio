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
import Loading from '../Loading/Loading'
import Success from '../Success/Success'

const MobileVersion = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [changedIcon, setIconChange] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  return (
    <div className="MobileVersion">
      <div className='backgroundsContainer'>
        <div className='background'></div>
        <div className='background'></div>
        <div className='background'></div>
        <div className='background'></div>
        <div className='background'></div>
      </div>
      {loading === true ? <Loading /> : null}
      {success === true ? <Success /> : null}
      <FontAwesomeIcon icon={changedIcon ? faStar : faBarsStaggered} className="bars" onClick={() => setMobileMenu(true)} onMouseEnter={() => setIconChange(true)} onMouseLeave={() => setIconChange(false)} />
      {mobileMenu ? <MobileMenu setMobileMenu={setMobileMenu} /> : null}
      <MobileHero />
      <MobileProjects />
      <MobileGames />
      <MobileContact setLoading={setLoading} setSuccess={setSuccess}/>
      <MobileFooter />
    </div>
  )
}
export default MobileVersion