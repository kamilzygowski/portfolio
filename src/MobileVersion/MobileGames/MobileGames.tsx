import React from 'react'
import './MobileGames.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper';
import { url } from 'inspector';

const MobileGames = () => {
  const data = [
    { img: "https://i.postimg.cc/vHrrQTby/deprev.png" },
    { img: "https://i.postimg.cc/fT4hKNWr/milion-lasers.png" }
  ]
  return (
    <div className='MobileGames'>
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        mousewheel={true}
        observeParents={true}
        observer={true}
      >
        {data.map((element: any, index: number) => {
          const preparedStyle:any = (`url("${element.img}")`).toString()
          return (
            <SwiperSlide key={index} className="slide">
              <div style={{backgroundImage: preparedStyle}} className='gamesBackground'>
                </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default MobileGames