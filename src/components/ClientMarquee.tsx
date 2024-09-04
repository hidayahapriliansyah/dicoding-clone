'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { clients } from '../data/clients';
import { LoadingImage } from './LoadingImage';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';

const ClientMarquee = () => {
  return (
    <div className='lg:hidden mt-8 w-full px-4'>
      <Swiper
        slidesPerView={'auto'}
        speed={3000}
        draggable
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false, // Mencegah jeda saat mouse berada di atas slide
        }}
        freeMode={true}
        loop={true}
        modules={[Autoplay, FreeMode]}
      >
        {clients.map((client, i) => {
          if (i % 2 !== 0) return null;
          return (
            <SwiperSlide
              key={i}
              className='w-fit max-w-[140px] sm:max-w-[160px] h-[60px]'
              style={{
                marginLeft: i === 0 ? '' : '30px',
              }}
            >
              <div className='flex justify-center items-center w-full h-full mb-[30px] py-2 border border-gray-300 rounded-sm'>
                <LoadingImage
                  alt={client.title}
                  src={`/images/clients/${client.image}`}
                  placeholder={client.imgPlaceholder as PlaceholderValue}
                  width={109}
                  height={46}
                />
              </div>
              {clients[i + 1] && (
                <div className='flex justify-center items-center w-full h-full mb-[30px] py-2 border border-gray-300 rounded-sm'>
                  <LoadingImage
                    alt={clients[i + 1].title}
                    src={`/images/clients/${clients[i + 1].image}`}
                    placeholder={client.imgPlaceholder as PlaceholderValue}
                    width={109}
                    height={46}
                  />
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ClientMarquee;
