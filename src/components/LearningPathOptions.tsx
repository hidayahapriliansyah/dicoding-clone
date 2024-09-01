'use client'

import clsx from 'clsx';
import { ArrowLeft, ArrowRight, MoveRight } from 'lucide-react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import LearningPathOptionCard from './LearningPathOptionCard';
import { Swiper as SwiperType } from 'swiper/types';
import { learningPaths, LearningPaths } from '../data/learning-paths';
import LearningPathCourses from './LearningPathCourses';

const LearningPathOptions = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [path, setPath] = useState<LearningPaths>('android')
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className='w-full'>
      <ul className='flex items-center md:hidden w-full overflow-x-auto font-medium space-x-4'>
        <li
          onClick={() => { if (path !== 'android') setPath('android') }}
          className={clsx('relative px-4 pt-4 pb-2 h-[68px] whitespace-nowrap hover:cursor-pointer', {
            'after:content-[""] after:w-6 after:h-1 after:bg-primary after:rounded-full after:absolute after:left-1/2 after:bottom-5 after:-translate-x-1/2': path === 'android'
          })}
        >
          Android Developer
        </li>
        <li
          onClick={() => { if (path !== 'be') setPath('be') }}
          className={clsx('relative px-4 pt-4 pb-2 h-[68px] whitespace-nowrap hover:cursor-pointer', {
            'after:content-[""] after:w-6 after:h-1 after:bg-primary after:rounded-full after:absolute after:left-1/2 after:bottom-5 after:-translate-x-1/2': path === 'be'
          })}
        >
          Back-End Developer
        </li>
        <li
          onClick={() => { if (path !== 'fe') setPath('fe') }}
          className={clsx('relative px-4 pt-4 pb-2 h-[68px] whitespace-nowrap hover:cursor-pointer', {
            'after:content-[""] after:w-6 after:h-1 after:bg-primary after:rounded-full after:absolute after:left-1/2 after:bottom-5 after:-translate-x-1/2': path === 'fe'
          })}
        >
          Front-End Web Developer
        </li>
        <li
          onClick={() => { if (path !== 'ios') setPath('ios') }}
          className={clsx('relative px-4 pt-4 pb-2 h-[68px] whitespace-nowrap hover:cursor-pointer', {
            'after:content-[""] after:w-6 after:h-1 after:bg-primary after:rounded-full after:absolute after:left-1/2 after:bottom-5 after:-translate-x-1/2': path === 'ios'
          })}
        >
          iOS Developer
        </li>
        <li
          onClick={() => { if (path !== 'ml') setPath('ml') }}
          className={clsx('relative px-4 pt-4 pb-2 h-[68px] whitespace-nowrap hover:cursor-pointer', {
            'after:content-[""] after:w-6 after:h-1 after:bg-primary after:rounded-full after:absolute after:left-1/2 after:bottom-5 after:-translate-x-1/2': path === 'ml'
          })}
        >
          Machine Learning Engineer
        </li>
        <li
          className='relative px-4 pt-4 pb-2 h-[68px] whitespace-nowrap hover:cursor-pointer'>
          <a href="#" className='flex items-center'>
            Lihat semua learning path
            <MoveRight className='ml-2' />
          </a>
        </li>
      </ul>

      <div className='hidden md:block mb-4 w-full'>
        <div className='hidden lg:flex lg:justify-end lg:gap-4 mr-4 mb-4'>
          <button
            className={clsx(
              'flex justify-center items-center text-primary-text p-[1px] w-8 h-8 border-2 border-primary rounded-full',
              {
                'opacity-50 cursor-not-allowed': isBeginning,
                'opacity-100': !isBeginning,
              }
            )}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          >
            <ArrowLeft className='m-0 p-0' />
          </button>
          <button
            className={clsx(
              'flex justify-center items-center text-primary-text p-[1px] w-8 h-8 border-2 border-primary rounded-full',
              {
                'opacity-50 cursor-not-allowed': isEnd,
                'opacity-100': !isEnd
              }
            )}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          >
            <ArrowRight />
          </button>
        </div>

        <Swiper
          spaceBetween={16}
          slidesPerView={'auto'}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onReachBeginning={() => setIsBeginning(true)}
          onReachEnd={() => setIsEnd(true)}
          onFromEdge={() => {
            setIsBeginning(false);
            setIsEnd(false);
          }}
        >
          {learningPaths.map((lpath, i) => (
            <SwiperSlide
              key={i}
              style={{
                width: '100%',
                height: '192px',
                maxWidth: 'fit-content',
                overflow: 'hidden',
                transition: 'all',
                transitionDuration: '0.3s'
              }}
              onClick={() => {
                if (path !== lpath.path) setPath(lpath.path);
              }}
            >
              <LearningPathOptionCard
                imgUrl={lpath.imgUrl}
                title={lpath.title}
                badge={lpath.badge}
                path={lpath.path}
                selectedPath={path}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide
            style={{
              width: '100%',
              height: '192px',
              maxWidth: 'fit-content',
              overflow: 'hidden',
              transition: 'all',
              transitionDuration: '0.3s'
            }}
          >
            <div
              className='relative flex justify-center items-start w-full max-w-[220.5px] xl:max-w-[265.5px] h-full bg-blue-400 transition-all duration-150 rounded-[5px] overflow-hidden hover:cursor-pointer'
            >
              <Image
                alt='Lihat lebih banyak learning path'
                src={'/images/badge-more.png'}
                width={510}
                height={384}
                quality={50}
                className='h-full object-cover object-left'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <LearningPathCourses
        selectedPath={path}
      />
    </div>
  );
}

export default LearningPathOptions;
