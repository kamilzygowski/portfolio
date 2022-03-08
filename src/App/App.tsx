import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper';
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import './App.scss'
import 'swiper/css';

const App = () => {
  return (
    <div className='App'>
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
          type: "progressbar",
        }}
        modules={[Mousewheel, Pagination]}
        observeParents={true}
        observer={true}
        className="mySwiper"
      >
        <SwiperSlide>
        <Home />
        </SwiperSlide>
        <SwiperSlide>
        <Projects />
        </SwiperSlide>
      </Swiper>
      
      
    </div>
  )
}

export default App