'use client'

import { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { newPrograms } from '../data/new-programs';
import NewProgramCard from './NewProgramCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CustomSlider: FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  return (
    <div className="w-full mx-auto">
      <div className="hidden lg:flex lg:justify-end lg:gap-4 mb-4">
        <button
          className={clsx('flex justify-center items-center text-primary-text p-[1px] w-8 h-8 border-2 border-primary-text rounded-full', {
            'opacity-50 cursor-not-allowed': isBeginning,
            'opacity-100': !isBeginning,
          })}
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
          aria-label='swipe-left-newest-program'
        >
          <ArrowLeft className='m-0 p-0' />
        </button>
        <button
          className={clsx('flex justify-center items-center text-primary-text p-[1px] w-8 h-8 border-2 border-primary-text rounded-full', {
            'opacity-50 cursor-not-allowed': isEnd,
            'opacity-100': !isEnd
          })}
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          aria-label='swipe-right-newest-program'
        >
          <ArrowRight />
        </button>
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        onReachBeginning={() => setIsBeginning(true)}
        onReachEnd={() => setIsEnd(true)}
        onFromEdge={() => {
          setIsBeginning(false);
          setIsEnd(false);
        }}
        slidesPerView={1}
        centeredSlides
        breakpoints={{
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 1.2
          }
        }}
      >
        {newPrograms.map((program, i) => (
          <SwiperSlide
            key={i}
            style={{
              width: '85%',
              marginLeft: i === 0 ? '' : '24px',
            }}
          >
            <NewProgramCard
              description={program.description}
              image={program.image}
              imgPlaceholder={program.imgPlaceholder}
              organizer={program.organizer}
              title={program.title}
              link={program.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  );
};

export default CustomSlider;
