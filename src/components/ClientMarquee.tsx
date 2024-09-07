'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { clients } from '../data/clients';
import { LoadingImage } from './LoadingImage';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';

const ClientMarquee = () => {
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

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
        {duplicatedClients.map((client, i) => {
          if (i % 2 !== 0) return null;
          return (
            <SwiperSlide
              key={i}
              className="flex items-center justify-center" // Tambahkan class flex untuk pengaturan posisi elemen dalam slide
              style={{
                marginLeft: '20px',
                width: 'fit-content',
                height: 'fit-content',
              }}
            >
              <div className='flex justify-center items-center w-[141] h-[60px] mb-[30px] p-2 border rounded-sm'>
                <LoadingImage
                  alt={client.title}
                  src={`/images/clients/${client.image}`}
                  placeholder={client.imgPlaceholder as PlaceholderValue}
                  width={109}
                  height={46}
                  className='w-[109px] h-[46px]'
                />
              </div>
              {duplicatedClients[i + 1] && (
                <div className='flex justify-center items-center w-[141] h-[60px] mb-[30px] p-2 border border-gray-300 rounded-sm'>
                  <LoadingImage
                    alt={duplicatedClients[i + 1].title}
                    src={`/images/clients/${duplicatedClients[i + 1].image}`}
                    placeholder={client.imgPlaceholder as PlaceholderValue}
                    width={109}
                    height={46}
                    className='w-[109px] h-[46px]'
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
