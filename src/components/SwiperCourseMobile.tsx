'use client'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import courses from '../data/courses';
import { Autoplay, FreeMode } from 'swiper/modules';
import CourseCard from './CourseCard';

const SwiperCourseMobile = () => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={'auto'}
      speed={7000}
      draggable
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      centeredSlides
      freeMode={true}
      loop={true}
      modules={[Autoplay, FreeMode]}
      className='w-full'
    >
      {
        courses.map((course, i) => {
          if (i % 2 !== 0) return null;

          return (
            <SwiperSlide
              key={i}
              className='w-full max-w-[300px]'
            >
              <CourseCard
                image={course.image}
                link={course.link}
                title={course.title}
              />
              <div className='my-4'></div>
              {
                courses[i + 1] &&
                <CourseCard
                  image={courses[i + 1].image}
                  link={courses[i + 1].link}
                  title={courses[i + 1].title}
                  shiftRight
                />
              }
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default SwiperCourseMobile