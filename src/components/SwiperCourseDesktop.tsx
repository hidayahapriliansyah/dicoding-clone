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
      freeMode={{
        momentumRatio: 0.1,
        momentumBounceRatio: 0.5,
        momentumVelocityRatio: 0.5
      }}
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
                imgPlaceholder={course.imgPlaceholder}
                link={course.link}
                title={course.title}
              />
              {
                courses[i + 1] &&
                <CourseCard
                  image={courses[i + 1].image}
                  imgPlaceholder={courses[i + 1].imgPlaceholder}
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