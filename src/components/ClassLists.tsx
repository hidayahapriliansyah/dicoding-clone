import { CircleChevronRight } from 'lucide-react'
import React from 'react'
import courses from '../data/courses';
import Image from 'next/image';
import SwiperCourseMobile from './SwiperCourseMobile';
import SwiperCourseDesktop from './SwiperCourseDesktop';

const ClassLists = () => {
  return (
    <section className='w-full my-16'>
      <div className='flex flex-col lg:flex-row mx-auto pb-6 lg:pb-0 w-full max-w-[540px] sm:max-w-[690px] lg:max-w-[930px] xl:max-w-[1140px] lg:h-[400px] text-white bg-primary-navy rounded-[4px] overflow-hidden'>
        <div className='flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4 p-8 w-full h-full lg:w-[40%] lg:py-16 lg:pr-6 lg:pl-16'>
          <h2 className='font-bold text-2xl lg:text-3xl text-center lg:text-left'>Belajar dengan kelas standar industri global</h2>
          <p className='font-medium text-center lg:text-left lg:mb-6'>Kelas di Dicoding Academy tersedia bagi yang belum memiliki kemampuan programming (dasar) hingga yang sudah profesional.</p>
          <a href="#" className='flex items-center gap-2 w-fit font-bold text-center lg:text-left hover:translate-x-2 transition-all duration-300'>
            Lihat semua kelas
            <CircleChevronRight className='w-5 h-5' />
          </a>
        </div>
        <div className='w-full lg:w-[55%] lg:hidden'>
          <SwiperCourseMobile />
        </div>
        <div className='w-full lg:w-[55%] hidden lg:block'>
          <SwiperCourseDesktop />
        </div>
      </div>
    </section>
  )
}

export default ClassLists