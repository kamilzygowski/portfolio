import React from 'react'
import './MobileVersion.scss'
import MobileContact from './MobileContact/MobileContact'
import MobileGames from './MobileGames/MobileGames'
import MobileHero from './MobileHero/MobileHero'
import MobileProjects from './MobileProjects/MobileProjects'

const MobileVersion = () => {
  return (
    <div className="MobileVersion">
        <MobileHero/>
        <MobileProjects />
        <MobileGames />
        <MobileContact />
    </div>
  )
}

export default MobileVersion