import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { LoadingImage } from './LoadingImage'

const Hero = () => {
  return (
    <section
      className='mt-[180px] md:mt-[120px] lg:mt-[80px]'
    >
      <div className='flex flex-col-reverse md:flex-row mx-auto container h-[402px]'>
        <div className='mx-auto w-full max-w-[510px] lg:max-w-full md:w-[40%] h-full pt-[48px] lg:pt-[100px] pb-[24px]'>
          <h2 className='text-[1.5rem] md:text-[1.65rem] lg:text-[2rem] tracking-tight lg:tracking-normal leading-tight text-primary-text font-medium mb-4'>Bangun Karirmu Sebagai Developer Profesional</h2>
          <p className='mb-5 md:mb-10'>Mulai belajar terarah dengan learning path</p>
          <a
            href="#learning-path"
            className='block sm:mx-auto lg:mx-0 p-2 w-fit h-fit text-white font-bold text-[1rem] px-6 bg-primary rounded-[2px]'
          >
            Belajar Sekarang
          </a>
        </div>

        <div className='sm:px-[51px] md:px-[54px] lg:px-[15px] w-full md:w-[60%] h-auto'>
          <LoadingImage
            alt='Image'
            src={'/images/homepage-hero.png'}
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="mx-auto lg:mx-0 w-full max-w-[408px] lg:max-w-full h-auto"
            placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAACwklEQVR4AQBBAL7/AI+sqgCPrKoAj6yqAI+sqgCPrKoAj6yqBI+sqguPrKoQj6yqEI+sqgyPrKoEj6yqAI+sqgCPrKoAj6yqAI+sqgAAQQC+/wCPrKoAj6yqAI+sqgCPrKoAj6yqBY+sqhSPrKoij6yqKY+sqimPrKoij6yqFY+sqgaPrKoAj6yqAI+sqgCPrKoAAEEAvv8Aj6yqAI+sqgCPrKoAj6yqDY+sqiePrKpBj6yqV4+sqmKPrKpij6yqVo+sqkCPrKonj6yqDo+sqgCPrKoAj6yqAABBAL7/AI+sqgCPrKoBj6yqGY+sqjuPrKphj6yqho+sqqOPrKqyj6yqsY+sqp+PrKqAj6yqXI+sqjePrKoZj6yqA4+sqgAAQQC+/wCPrKoRj6yqIY+sqj+PrKpnj6yqlY+sqsCPrKrhj6yq8o+squ6PrKrYj6yqs4+sqoaPrKpaj6yqNY+sqhqPrKoNAEEAvv8Aj6yqGo+sqiqPrKpIj6yqco+sqp+PrKrKj6yq64+sqvqPrKr0j6yq3I+sqrWPrKqHj6yqW4+sqjWPrKoaj6yqDQBBAL7/AI+sqgePrKoVj6yqL4+sqlOPrKp7j6yqn4+sqrqPrKrGj6yqv4+sqqiPrKqFj6yqXY+sqjiPrKoYj6yqA4+sqgAAQQC+/wCPrKoAj6yqAI+sqguPrKolj6yqQ4+sql6PrKpxj6yqeY+sqnKPrKpfj6yqRI+sqiePrKoNj6yqAI+sqgCPrKoAAEEAvv8Aj6yqAI+sqgCPrKoAj6yqBY+sqhmPrKorj6yqN4+sqjuPrKo1j6yqJ4+sqhWPrKoDj6yqAI+sqgCPrKoAj6yqAAFBAL7/AI+sqgCPrKoAj6yqAI+sqgCPrKoGj6yqE4+sqhuPrKodj6yqF4+sqg2PrKoAj6yqAI+sqgCPrKoAj6yqAI+sqgAZMlHkBxdO5QAAAABJRU5ErkJggg=='
          />
        </div>
      </div>
    </section>
  )
}

export default Hero