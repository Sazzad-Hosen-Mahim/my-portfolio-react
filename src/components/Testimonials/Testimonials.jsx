import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data  = [
  {
    avatar: AVTR1,
    name: 'Tina Spina',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem officiis sint dicta, doloremque temporibus, fugiat natus veniam nihil, exercitationem asperiores! Molestiae laudantium quidem alias exercitationem itaque odit mollitia quas.",

  },
  {
    avatar: AVTR2,
    name: 'Ben Stokes',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem officiis sint dicta, doloremque temporibus, fugiat natus veniam nihil, exercitationem asperiores! Molestiae laudantium quidem alias exercitationem itaque odit mollitia quas.",

  },
  {
    avatar: AVTR3,
    name: 'Andrea Pirlo',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem officiis sint dicta, doloremque temporibus, fugiat natus veniam nihil, exercitationem asperiores! Molestiae laudantium quidem alias exercitationem itaque odit mollitia quas.",

  },
  {
    avatar: AVTR4,
    name: 'Maya Phoenix',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem officiis sint dicta, doloremque temporibus, fugiat natus veniam nihil, exercitationem asperiores! Molestiae laudantium quidem alias exercitationem itaque odit mollitia quas.",

  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials-container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
      
       pagination={{ clickable: true }}
      >
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
          <div className='client-avatar'>
            <img src={avatar}/>
          </div>
          <h5 className='client-name'>{name}</h5>
            <small className='client-review'>{review}</small>
        </SwiperSlide>
          )
        })
      }
        
        
        
      </Swiper>
    </section>
  )
}

export default Testimonials