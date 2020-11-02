import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'
import {SwiperCover} from './SliderFrames.styles'
const SliderFrames = () => {

     const coverflowParams = {
        rotate: 50,
        stretch: 50,
        depth: 100,
        modifier: 1,
        slideShadows: true
      };
      
      const paginationParams = {
        el: '.swiper-pagination'
      }
      
    return (

      <Swiper effect='coverflow' grabCursor={true} centeredSlides ={true} slidesPerView='auto' coverflowEffect={coverflowParams} pagination={paginationParams}>
                      <div>
          <img src='http://lorempixel.com/600/600/nature/1/'/>
          </div>
          <div>
          <img src='http://lorempixel.com/600/600/nature/2/'/>
            </div>
            <div>
            <img src='http://lorempixel.com/600/600/nature/2/'/>
            </div>


         


          {/* <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
      <div>Slide 5</div> */}

      </Swiper>
    )
  };

export default SliderFrames