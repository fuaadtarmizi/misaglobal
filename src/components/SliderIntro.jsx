'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../app/styles/SliderIntro.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay:3000,
          disableOnInteraction:false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://imtc.my/wp-content/uploads/2020/08/Renewable-Energy-6-888x500.jpg"
          style={{height:'700px'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/6c/2a/a1/6c2aa1598c6ba9c870f3cd4467066d5c.jpg" 
          style={{height:'700px'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://skillsroad.com.au/getmedia/5ddb8f2c-8d29-4500-bb7f-7173f779fe03/telecommunications_trades_workers_careers.jpg?height=567&width=850&ext=.jpg"
          style={{height:'700px'}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.britannica.com/42/163542-050-C8A3B155/tanker-shipyard-Gdansk-Poland.jpg"
          style={{height:'700px'}} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
