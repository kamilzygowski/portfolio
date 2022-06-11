import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper';
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import './App.scss'
import 'swiper/css';
import Games from '../Games/Games';
import Sidebar from '../Sidebar/Sidebar';
import Contact from '../Contact/Contact';
import NewProjects from '../NewProjects/NewProjects';

const App = () => {
  // Get the ref to swiper
  let swiperRef: typeof Swiper | any;
  const swipeTo = (id: number) => {
    swiperRef.activeIndex = id;
    swiperRef.realIndex = id;
    swiperRef.snapIndex = id;
    id === 0 ? swiperRef.isBeginning = true : swiperRef.isBeginning = false
    id === 3 ? swiperRef.isEnd = true : swiperRef.isEnd = false
    swiperRef.progress = id / 4;
    swiperRef.translate = -window.innerWidth * id
  }
  return (
    <div className='App'>
      <Sidebar swipeTo={swipeTo} />
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
        onSwiper={(swiper) => swiperRef = swiper}
        onInit={(swiper) => swiperRef = swiper}
      >
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          {/*<Projects />*/}
          <NewProjects />
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