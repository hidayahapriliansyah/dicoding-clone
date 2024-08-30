'use client'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import courses from '../data/courses';
import { Autoplay, FreeMode } from 'swiper/modules';
import CourseCard from './CourseCard';

const SwiperCourseDesktop = () => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={'auto'}
      speed={5000}
      direction='vertical'
      draggable
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      freeMode={true}
      loop={true}
      centeredSlides={true}
      modules={[Autoplay, FreeMode]}
      className='w-[150%]'
      style={{ height: '100vh', transform: 'translateX(54px)' }}
    >
      {
        courses.map((course, i) => {
          if (i % 2 !== 0) return null;
          const shiftRight = i % 4 === 0;

          return (
            <SwiperSlide
              key={i}
              className='w-full'
              style={{
                display: 'flex',
                gap: '16px',
                transform: shiftRight ? 'translateX(48px)' : 'none',
                height: 'fit-content'
              }}
            >
              <CourseCard
                image={course.image}
                link={course.link}
                title={course.title}
              />
              {
                courses[i + 1] &&
                <CourseCard
                  image={courses[i + 1].image}
                  link={courses[i + 1].link}
                  title={courses[i + 1].title}
                />
              }
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default SwiperCourseDesktop