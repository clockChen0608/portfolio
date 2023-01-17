import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  { avatar: AVTR1, name: 'Elsa', review: 'momomomomomomo' },
  { avatar: AVTR2, name: 'Amber', review: 'lololololooloololololoo' },
  { avatar: AVTR3, name: 'Xavier', review: 'u r rrrrrrrrr' },
  { avatar: AVTR4, name: 'Zeuik', review: 'tytytytyty' },
]

const Testimonials = () => {
  return (
    <section id='testmonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}

        className='container testimonials__container'>
        {
          data.map(({ avatar, name, review }, index) => {
            return (

              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>

            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials