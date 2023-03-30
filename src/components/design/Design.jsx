import React from 'react';
import "./design.css";
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const Design = () => {
  return (
    <section className="testimonials container section" id='testimonials'>
    <h2 className="section__title">My business</h2>
    <span className="section__subtitle">Some of my designs</span>


    <Swiper className="testimonials__container"
    loop={true}
    grabCursor={true}
    spaceBetween={24}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      576: {
        slidesPerView: 2,
      },
      568: {
        slidesPerView: 2,
        spaceBetween: 48,
      },
    }}
    modules={[Pagination]}
    >
        {Data.map(({id, image, title, description }) =>{
            return (
                <SwiperSlide className="testimonials__card"  key={id}>
                    <img src={image} alt=""
                     className='testimonials__img' />

                     <h3 className="testimonials__name">{title}</h3>
                     <p className="testimonials__description">
                        {description}
                     </p>
                </SwiperSlide>
            );
        }
        )}
    </Swiper>

</section>
  )
}

export default Design