import React, { useState, useRef, useEffect } from 'react'
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
  // Get the ref to swiper
  let swiperRef:any;
  
  useEffect(()=> {
    //swiperRef.activeIndex = 3;
  }, [])
  const swipeTo = (id:number) => {
   swiperRef.previousIndex = id <= 0 ? null : id-1;
    swiperRef.activeIndex = id;
   swiperRef.nextIndex = id >= 3 ? null : id+1


  }
  return (
    <div className='App'>
      <Sidebar swipeTo={swipeTo}/>
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
        onSlideChange={(swiper) => console.log(swiper)}
        onSwiper={(swiper) => swiperRef=swiper}
        onInit={(swiper) => {
          swiperRef=swiper
          console.log(swiper)
        }}
        onActiveIndexChange={() => console.log('changed active index')}
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