import React from 'react'
import './MobileGames.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

interface MobileGame {
  title: string;
  img: string;
  description: string;
}
const MobileGames = () => {
  const data: MobileGame[] = [
    { title: "Mouse Sabre", img: "https://i.postimg.cc/63RQsW5L/FD.webp", description: 'Slay your enemies with magic sword, watch out enemies mutations, use your special ability "Samurai Slash' },
    { title: "Dimension Eye", img: "https://i.postimg.cc/vHrrQTby/deprev.png", description: `2D platformer game. Your main quest is to find out what's goin on in this world. The only things you find are.. eyes...` },
    { title: "Milion Lasers", img: "https://i.postimg.cc/fT4hKNWr/milion-lasers.png", description: '2D action coop game. You need one friend on hot-seat to take the challenge. Try to avoid all the obstacles and remember to be close to your partner' },
    { title: "Multi Arena", img: "https://i.postimg.cc/Bn49rBK5/multiarena.png", description: 'Online multiplayer 1 versus 1 arena game. Get a buddy, paste game code to him and fight!' }
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
        {data.map((element: MobileGame, index: number) => {
          const preparedStyle: any = (`url("${element.img}")`).toString()
          return (
            <SwiperSlide key={index} className="slide">
              <div style={{ backgroundImage: preparedStyle }} className='gamesBackground'>
                <h3 className='gameTitle'>{element.title}</h3>
                <p className='gameDescription'>{element.description}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
export default MobileGames