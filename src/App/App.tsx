import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper';
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import './App.scss'
import 'swiper/css';
import Games from '../Games/Games';
import Sidebar from '../Sidebar/Sidebar';

const App = () => {
  return (
    <div className='App'>
      <Sidebar/>
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        //spaceBetween={30}
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
        <SwiperSlide>
          <Games />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default App