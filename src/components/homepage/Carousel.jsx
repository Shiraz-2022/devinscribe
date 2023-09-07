import React, { useEffect, useState, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';





function Carousel() {

  const [slidePerView, setSlidePerView] = useState(5);

  const swiperRef = useRef(null);




  const swiperOptions = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: slidePerView,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    keyboard: { enabled: true },
    pagination: false,
    modules: [EffectCoverflow, Pagination],
  }




  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        swiperRef.current.swiper.slidePrev();
      } else if (event.key === 'ArrowRight') {
        swiperRef.current.swiper.slideNext();
      }
    };

    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 900) {
        setSlidePerView(5);
      } else if (screenWidth <= 900 && screenWidth >= 500) {
        setSlidePerView(3);
      } else if (screenWidth < 500) {
        setSlidePerView(1);
      };
    };

    const handelResize = () => {
      updateSlidesPerView();
      swiperRef.current.swiper.params.slidePerView = slidePerView;
      swiperRef.current.swiper.update();
    }



    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handelResize);

    updateSlidesPerView();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handelResize);
    };



  });


  return (
    <>
      <div className='h-p-carousel'>


        <div className='h-p-carousel-container'>

          <Swiper {...swiperOptions} ref={swiperRef}>


            <SwiperSlide>
              <div className='card carousel1'>
                <h4>Our Approach</h4>
                <p>At Devinscribe, we believe that web development is not just about lines of code, it's about telling stories, connecting with audiences, and making a difference.</p>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card carousel2'>
                <h4>Blog</h4>
                <p>This is our blog site where we post good contents on web development</p>
                <a href='https://diwebdev.blogspot.com/'><button>Visit</button></a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card carousel3'>
                <h4>Hire us</h4>
                <p>If you want us to work with you, you can contact us in here.</p>
                <a href='https://www.fiverr.com/s/jX79Wa'><button>Visit</button></a></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card carousel4'>
                <h4>About us</h4>
                <p>Here you can find complete details about what we do and how we can be heplfull to you as a company or a developer</p>
                <a href="/resourcePage"><button>Visit</button></a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card carousel5'>
                <h4>What can we do for you?</h4>
                <p>1. Custom Websites</p>
                <p>2. Landing Pages</p>
                <p>3. Hosting and Domain</p>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

      </div>
    </>
  )
}


export default Carousel;