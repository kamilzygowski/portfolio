import React, { useEffect, useState } from 'react'
import './Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessRook, faChevronRight, faCode, faEnvelope, faEye, faGamepad, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';

const Sidebar = (props:any) => {
  const [container, setContainer] = useState<any>(null);
  const [canUserHover, setHover] = useState<boolean>(true);
  const toggleSidebar = ():void => {
    if (canUserHover) {
      container.style.left === `${25}px` ? container.style.left = `${-105}px` : container.style.left = `${25}px`
      setHover(false)
    }
    setTimeout(() => {
      setHover(true);
    }, 1200);
  }
  const scrollToComponent = (id:number) => {
    props.swipeTo(id)
    const swiperWrapper:any = document.querySelector(".swiper-wrapper");
    const swiperSlides:any = document.querySelectorAll('.swiper-slide')
    console.log(swiperWrapper.style.transform)
    swiperWrapper.style = `transition-duration: 300ms; transform: translate3d(${-window.innerWidth * id}px, 0px, 0px)`;
    console.log(swiperSlides[id])
    // Remove all classes
    swiperSlides.forEach((element:any) =>{
      element.classList.remove('swiper-slide-active')
      element.classList.remove('swiper-slide-next')
      element.classList.remove('swiper-slide-prev')
    })
    // Attach Swiper classes to correct components
    swiperSlides[id].classList.add('swiper-slide-active')
    if(id+1 >= swiperSlides.length-1){
      swiperSlides[0].classList.add('swiper-slide-next')
    }else{
      swiperSlides[id+1].classList.add('swiper-slide-next')
    }
    if(id <= 0){
      swiperSlides[swiperSlides.length-1].classList.add('swiper-slide-prev')
    }else{
      swiperSlides[id-1].classList.add('swiper-slide-prev')
    }  

  }
  return (
    <div className='Sidebar' ref={(element) => setContainer(element)}>
      <div className='sideLinks'>
        <FontAwesomeIcon icon={faHouseChimney} className="icon" onClick={() => scrollToComponent(0)}/>
        <FontAwesomeIcon icon={faCode} className="icon" onClick={() => scrollToComponent(1)}/>
        <FontAwesomeIcon icon={faGamepad} className="icon" onClick={() => scrollToComponent(2)}/>
        <FontAwesomeIcon icon={faEnvelope} className="icon" onClick={() => scrollToComponent(3)}/>
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