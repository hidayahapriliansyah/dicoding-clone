import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
      className='flex flex-col-reverse md:flex-row mt-[80px] gap-8 w-full max-w-[1140px] h-[402px]'
    >
      <div className='w-full md:w-[40%] h-full md:pt-[100px] px-[15px]'>
        <h2 className='text-[1.5rem] md:text-[2rem] text-primary-text font-medium mb-4'>Bangun Karirmu Sebagai Developer Profesional</h2>
        <p className='mb-5 md:mb-10'>Mulai belajar terarah dengan learning path</p>
        <Button
          className='font-bold text-[1rem] px-6'
        >Belajar Sekarang</Button>
      </div>

      <div className='relative flex items-center w-full h-full max-h-[216px] md:max-h-full md:w-[60%]'>
        <Image
          alt='Image'
          src={'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-hero.png'}
          fill
          className='object-contain overflow-hidden w-full'
        />
      </div>
    </section>
  )
}

export default Hero