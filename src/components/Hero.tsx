import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { LoadingImage } from './LoadingImage'

const Hero = () => {
  return (
    <section
      className='flex flex-col-reverse md:flex-row mt-[80px] gap-8 w-full max-w-[1140px] h-[402px]'
    >
      <div className='w-full md:w-[40%] h-full md:pt-[100px] px-[15px]'>
        <h2 className='text-[1.5rem] md:text-[2rem] text-primary-text font-medium mb-4'>Bangun Karirmu Sebagai Developer Profesional</h2>
        <p className='mb-5 md:mb-10'>Mulai belajar terarah dengan learning path</p>
        <a href="#learning-path" className='block w-fit h-fit'>
          <Button
            className='font-bold text-[1rem] px-6'
          >Belajar Sekarang</Button>
        </a>
      </div>

      <div className='relative flex items-center w-full h-full max-h-[216px] md:max-h-full md:w-[60%]'>
        <LoadingImage
          alt='Image'
          src={'/images/homepage-hero.png'}
          fill
          className='object-contain overflow-hidden w-full'
          placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAACwklEQVR4AQBBAL7/AI+sqgCPrKoAj6yqAI+sqgCPrKoAj6yqBI+sqguPrKoQj6yqEI+sqgyPrKoEj6yqAI+sqgCPrKoAj6yqAI+sqgAAQQC+/wCPrKoAj6yqAI+sqgCPrKoAj6yqBY+sqhSPrKoij6yqKY+sqimPrKoij6yqFY+sqgaPrKoAj6yqAI+sqgCPrKoAAEEAvv8Aj6yqAI+sqgCPrKoAj6yqDY+sqiePrKpBj6yqV4+sqmKPrKpij6yqVo+sqkCPrKonj6yqDo+sqgCPrKoAj6yqAABBAL7/AI+sqgCPrKoBj6yqGY+sqjuPrKphj6yqho+sqqOPrKqyj6yqsY+sqp+PrKqAj6yqXI+sqjePrKoZj6yqA4+sqgAAQQC+/wCPrKoRj6yqIY+sqj+PrKpnj6yqlY+sqsCPrKrhj6yq8o+squ6PrKrYj6yqs4+sqoaPrKpaj6yqNY+sqhqPrKoNAEEAvv8Aj6yqGo+sqiqPrKpIj6yqco+sqp+PrKrKj6yq64+sqvqPrKr0j6yq3I+sqrWPrKqHj6yqW4+sqjWPrKoaj6yqDQBBAL7/AI+sqgePrKoVj6yqL4+sqlOPrKp7j6yqn4+sqrqPrKrGj6yqv4+sqqiPrKqFj6yqXY+sqjiPrKoYj6yqA4+sqgAAQQC+/wCPrKoAj6yqAI+sqguPrKolj6yqQ4+sql6PrKpxj6yqeY+sqnKPrKpfj6yqRI+sqiePrKoNj6yqAI+sqgCPrKoAAEEAvv8Aj6yqAI+sqgCPrKoAj6yqBY+sqhmPrKorj6yqN4+sqjuPrKo1j6yqJ4+sqhWPrKoDj6yqAI+sqgCPrKoAj6yqAAFBAL7/AI+sqgCPrKoAj6yqAI+sqgCPrKoGj6yqE4+sqhuPrKodj6yqF4+sqg2PrKoAj6yqAI+sqgCPrKoAj6yqAI+sqgAZMlHkBxdO5QAAAABJRU5ErkJggg=='
        />
      </div>
    </section>
  )
}

export default Hero