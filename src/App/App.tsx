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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBabyCarriage, faBarChart, faBarcode, faBars, faBarsProgress, faBarsStaggered, faBraille, faStar } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';

const App = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  setTimeout(() => {
    console.log(nextRef)

  }, 5000)
  return (
    <div className='App'>
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
        allowTouchMove={false}
      >
          <SwiperSlide>
          <Home />
          </SwiperSlide>
        <SwiperSlide>
          <Projects />
        </SwiperSlide>


        <SwiperSlide>
          <Games />
        </SwiperSlide>
        <SwiperSlide>
          <Contact />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default App