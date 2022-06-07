import React, { useState } from 'react'
import './Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCode, faEnvelope, faGamepad, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';

const Sidebar = (props: any) => {
  const [container, setContainer] = useState<any>(null);
  const [canUserHover, setHover] = useState<boolean>(true);
  const toggleSidebar = (): void => {
    if (canUserHover) {
      container.style.left === `${25}px` ? container.style.left = `${-105}px` : container.style.left = `${25}px`
      setHover(false)
    }
    setTimeout(() => {
      setHover(true);
    }, 1200);
  }
  const scrollToComponent = (id: number) => {
    props.swipeTo(id)
    const swiperWrapper: HTMLElement | any = document.querySelector(".swiper-wrapper");
    swiperWrapper.style = `transition-duration: 300ms; transform: translate3d(${-window.innerWidth * id}px, 0px, 0px)`;
  }
  return (
    <div className='Sidebar' ref={(element) => setContainer(element)}>
      <div className='sideLinks'>
        <FontAwesomeIcon icon={faHouseChimney} className="icon" onClick={() => scrollToComponent(0)} />
        <FontAwesomeIcon icon={faCode} className="icon" onClick={() => scrollToComponent(1)} />
        <FontAwesomeIcon icon={faGamepad} className="icon" onClick={() => scrollToComponent(2)} />
        <FontAwesomeIcon icon={faEnvelope} className="icon" onClick={() => scrollToComponent(3)} />
        <div className='socialLinks'>
          <SocialIcon url="https://github.com/swedishsailor" className='social' />
          <SocialIcon url="https://www.facebook.com/kamil.zygowski.7/" className='social' />
          <SocialIcon url="https://www.instagram.com/szwedzkimarynarz/" className='social' />
        </div>
      </div>
      <FontAwesomeIcon icon={faChevronRight} className="expandIcon" onMouseEnter={() => toggleSidebar()} onClick={() => toggleSidebar()} />
    </div>
  )
}

export default Sidebar