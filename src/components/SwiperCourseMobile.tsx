'use client'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import courses from '../data/courses';
import { Autoplay, FreeMode } from 'swiper/modules';
import CourseCard from './CourseCard';

const SwiperCourseMobile = () => {
  const duplicatedCourses = [...courses, ...courses, ...courses, ...courses];

  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={'auto'}
      speed={7000}
      draggable
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        stopOnLastSlide: false, // Pastikan autoplay tidak berhenti di slide terakhir
        reverseDirection: false, // Memastikan arah autoplay tetap
        pauseOnMouseEnter: false, // M
      }}
      centeredSlides
      freeMode={{
        momentumRatio: 0.1,
        momentumBounceRatio: 0.5,
        momentumVelocityRatio: 0.5
      }}
      loop={true}
      modules={[Autoplay, FreeMode]}
      className='w-full'
    >
      {
        duplicatedCourses.map((course, i) => {
          if (i % 2 !== 0) return null;

          return (
            <SwiperSlide
              key={i}
              className='w-full max-w-[300px]'
            >
              <CourseCard
                image={course.image}
                imgPlaceholder={course.imgPlaceholder}
                link={course.link}
                title={course.title}
              />
              <div className='my-4'></div>
              {
                duplicatedCourses[i + 1] &&
                <CourseCard
                  image={duplicatedCourses[i + 1].image}
                  imgPlaceholder={duplicatedCourses[i + 1].imgPlaceholder}
                  link={duplicatedCourses[i + 1].link}
                  title={duplicatedCourses[i + 1].title}
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