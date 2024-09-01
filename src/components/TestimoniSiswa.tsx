'use client';

import Image from 'next/image'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import testimonies from '../data/testimonies';
import TestimonyCard from './TestimonyCard';
import { Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight, SquareArrowOutUpRight } from 'lucide-react';

const TestimoniSiswa = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className='py-[50px] w-full'>
      <div className='mx-auto px-[15px] max-w-[540px] md:max-w-[690px] lg:max-w-[930px] xl:max-w-[1140px] w-full text-primary-text'>
        <div className='flex justify-between mb-6 items-center w-full'>
          <h3 className='text-xl lg:text-3xl font-medium'>Testimoni Siswa</h3>
          <div className='flex justify-end gap-4'>
            <button
              className='flex justify-center items-center text-primary-text p-[1px] w-8 h-8 border-2 border-primary-text rounded-full'
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeft className='m-0 p-0' />
            </button>
            <button
              className='flex justify-center items-center text-primary-text p-[1px] w-8 h-8 border-2 border-primary-text rounded-full'
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <Swiper
          className='shadow-xl'
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          allowTouchMove={false}
        >
          {
            testimonies.map((testi, i) => (
              <SwiperSlide key={i}>
                <TestimonyCard
                  company={testi.company}
                  completedClass={testi.completedClass}
                  description={testi.description}
                  image={testi.image}
                  name={testi.name}
                  profession={testi.profession}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <a href="#" className='flex items-center gap-3 ml-auto my-6 w-fit font-bold'>
          Lihat semua <SquareArrowOutUpRight />
        </a>
      </div>
    </section>
  )
}

export default TestimoniSiswa
