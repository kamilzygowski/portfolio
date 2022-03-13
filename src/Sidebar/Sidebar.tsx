import React, { useEffect, useState } from 'react'
import './Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessRook, faChevronRight, faEye, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';

const Sidebar = () => {
  const [container, setContainer] = useState<any>(null);
  const toggleSidebar = () => {
    container.style.left === `${0}px` ? container.style.left = `${-90}px` : container.style.left = `${0}px`
  }
  return (
    <div className='Sidebar' ref={(element) => setContainer(element)}>
      <div className='sideLinks'>
        <FontAwesomeIcon icon={faHouseChimney} className="icon" />
        <FontAwesomeIcon icon={faEye} className="icon" />
        <FontAwesomeIcon icon={faChessRook} className="icon" />
        <div className='socialLinks'>
          <SocialIcon url="https://github.com/swedishsailor" className='social'/>
          <SocialIcon url="https://www.facebook.com/kamil.zygowski.7/" className='social'/>
        </div>
      </div>
      <FontAwesomeIcon icon={faChevronRight} className="expandIcon" onClick={() => toggleSidebar()} />
    </div>
  )
}

export default Sidebar