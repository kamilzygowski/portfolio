import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper';
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import './App.scss'
import 'swiper/css';
import Games from '../Games/Games';
import Sidebar from '../Sidebar/Sidebar';
import Contact from '../Contact/Contact';
import GamesSection from '../GamesSection/GamesSection';
import MobileMenu from '../MobileMenu/MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import { animateScroll as scroll, scroller, Element, Link } from 'react-scroll';

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  setTimeout(() => {
    console.log(nextRef)

  }, 5000)
  return (
    <div className='App'>
            <HashRouter>
      <FontAwesomeIcon icon={faBars} className="bars" onClick={() => setMobileMenu(true)}/>
      {mobileMenu ? <MobileMenu/> : null}
      <Sidebar/>
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        //spaceBetween={30}
        mousewheel={true}
    // Tring to get the refferences

        modules={[Mousewheel, Pagination]}
        observeParents={true}
        observer={true}
        className="mySwiper"
      >
          <SwiperSlide>
          <Element name="home" id="home">
          <Home />
          </Element>
          </SwiperSlide>
        <Element name="projects" id="projects">
        <SwiperSlide>
          <Projects />
        </SwiperSlide>
        </Element>


        <SwiperSlide>
          <Games />
        </SwiperSlide>
        <SwiperSlide>
          <Contact />
        </SwiperSlide>
      </Swiper>
      <Routes>
        <Route path="home" element={<Home/>}/>
        </Routes></HashRouter>
    </div>
  )
}

export default App