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
import { LoadingImage } from './LoadingImage';

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
          // spaceBetween={16}
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
                transitionDuration: '0.3s',
                marginLeft: i === 0 ? '' : '16px',
              }}
              onClick={() => {
                if (path !== lpath.path) setPath(lpath.path);
              }}
            >
              <LearningPathOptionCard
                imgUrl={lpath.imgUrl}
                title={lpath.title}
                badge={lpath.badge}
                badgePlaceholder={lpath.badgePlaceholder}
                path={lpath.path}
                selectedPath={path}
                imgPlaceholder={lpath.imgPlaceholder}
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
              transitionDuration: '0.3s',
              marginLeft: '16px',
            }}
          >
            <div
              className='relative flex justify-center items-start w-full max-w-[220.5px] xl:max-w-[265.5px] h-full bg-blue-400 transition-all duration-150 rounded-[5px] overflow-hidden hover:cursor-pointer'
            >
              <LoadingImage
                alt='Lihat lebih banyak learning path'
                src={'/images/badge-more.png'}
                placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAADCElEQVR4AQBBAL7/ADJndv8tYnH/JFln/xlMW/8SQ1H/EEBO/xRCUP8YRFL/GEJQ/xY/Tf8YQE7/HkZU/yVMWv8lS1r/HkRS/xc9S/8AQQC+/wAqX23/J1tp/yBTYv8YSlj/EkNR/xNCUP8ZRlT/HUlX/x1HVf8ZQlD/GEBO/xxDUf8hR1b/IEZU/xk/Tf8SOEb/AEEAvv8AH1Jg/x1QXv8aS1n/FUVT/xNCUP8XRVP/IExa/yZQXv8lTlz/H0dV/xpBT/8ZQE7/G0FQ/xpATv8TOUj/DjRC/wBBAL7/ABVEUv8VRFL/FEJQ/xI/Tv8TP03/GkVT/yROXP8sVGL/K1Jg/yNJWP8bQE//FzxL/xc9S/8WPEr/EzhG/w80Qv8AQQC+/wAPOUf/ETpJ/xE6Sf8ROUf/EjpI/xk/Tf8kSVf/LFBf/yxQXv8jR1X/Gj1L/xU4Rv8VOUf/FztJ/xc6Sf8VOUf/AEEAvv8ADzJA/xE0Qv8TNUP/EjNB/xEyQP8VNUP/Hj1L/yZFU/8mRVP/Hz5M/xY1Q/8RMT//FDNC/xk5R/8cPEv/HT5M/wBBAL7/ABItO/8VMD7/FzE//xQuPP8QKTj/ECk3/xUuPP8cNUP/HjdF/xgxP/8QKjj/DSc1/xEsOv8YM0H/HjlI/yE8S/8AQQC+/wAVJzX/GSs6/xwuPP8ZKzn/EiMy/w4fLf8QIjD/Fig2/xgqOf8UJzX/DSEv/woeLf8NIjD/FCo4/xowPv8dNEL/AEEAvv8AFiAv/x0nNf8iLDr/Hyk3/xchL/8QGij/ERsp/xYhL/8ZJTP/FiMx/w8dK/8LGSf/Cxsp/w8fLv8TJDL/FSc1/wBBAL7/ABYaKP8eIjD/Jik4/yUpN/8dIS//Fhoo/xUaKP8bIC7/HyUz/xwkMv8VHiz/Dhgm/wsWJP8LGCb/DBko/w0aKf8BQQC+/wAVFSP/Hh8t/ygoNv8pKTf/ISIw/xobKf8aGyr/HyIw/yQoNv8iJzX/GiAu/xEZJ/8MFSP/ChQi/wkUIv8IEyL/wbQSgyvswL4AAAAASUVORK5CYII='
                width={510}
                height={384}
                quality={50}
                className='h-full w-auto object-cover object-left'
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
