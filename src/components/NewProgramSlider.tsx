'use client'

// components/CustomSlider.tsx

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
        spaceBetween={24}
        slidesPerView={1.2}
        breakpoints={{
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 1.1
          }
        }}
        className="swiper-container mx-auto"
      >
        {newPrograms.map((program, i) => (
          <SwiperSlide
            key={i}
            className='w-full'
          >
            <NewProgramCard
              description={program.description}
              imageLink={program.imageLink}
              organizer={program.organizer}
              title={program.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  );
};

export default CustomSlider;
