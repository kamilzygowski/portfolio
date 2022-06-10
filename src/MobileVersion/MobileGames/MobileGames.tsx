import React from 'react'
import './MobileGames.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

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
        <SwiperSlide className="slide">
          <div className='gamesBackground'>
            <h2 className='gamesIntro'>Explore my games!</h2>
            <img src="https://i.postimg.cc/6QyCwxDb/6l1X.gif" alt="introGif" className='introGif' />
            <div className='swipeRight'>
              <FontAwesomeIcon icon={faLocationArrow} className="gamesArrow" />
            </div>
          </div>
        </SwiperSlide>
        {data.map((element: any, index: number) => {
          const preparedStyle: any = (`url("${element.img}")`).toString()
          return (
            <SwiperSlide key={index} className="slide">
              <div style={{ backgroundImage: preparedStyle }} className='gamesBackground'>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
export default MobileGames