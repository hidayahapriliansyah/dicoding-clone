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
        <Button
          className='font-bold text-[1rem] px-6'
        >Belajar Sekarang</Button>
      </div>

      <div className='relative flex items-center w-full h-full max-h-[216px] md:max-h-full md:w-[60%]'>
        {/* <Image
          alt='Image'
          src={'/images/homepage-hero.png'}
          fill
          className='object-contain overflow-hidden w-full'
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAACwklEQVR4AQBBAL7/AG20swBrr64AaKemAGegngBrnZsAdJ+cAICmowCNr6sAl7e0AJu8uQCavrsAlb26AI25uACFtrUAf7OzAHyysQAAQQC+/wBlsK82Y6uqMmGkoy5hnpwsZZyZMG+enDl7pqJEiK+rS5K3tEmXvLk8lr67JZC9ugiJurgAgbe1AHu0swB4s7IAAEEAvv8AWamonlelpJtWn56YV5qZmF2Zl55nnZupdaWitYKvq7uLt7S3kLy5pY++u4eJvbtigrq4PHu4tht1trUDcrW0AABBAL7/AEyhoNxMnp3aTJqY2E+XldlXmJXhYp2a7XCmovh9r6z9h7i09Yu8ud6Jvru4g726iny6uVt1uLcxcLe2E222tQMAQQC+/wBGmpn0R5iX8kmVlPBNlJPxV5eV+GOem/9yp6T/f7Gt/4e4tf+KvbrqiL27v4G8uol6urhSc7i3Im63tgBstrYAAEEAvv8ASpaV/0uUk/9Ok5L/VZST/1+Zlv9toJ7/e6qn/4ezsP+Purf/kL268429usWGu7iMfri2Une2tR5ytbUAcLW1AABBAL7/AFaUk/9XlJP/XJST/2SWlf9wnJr/fqSi/4yuq/+XtrP/nby4/529uvyXvLnQj7m2moe2tGKAtLMve7OyCXmzsgAAQQC+/wBnlZT+aZWU+G+Wle94mpjqhKCe6pOppvGgsq/7qrq2/66+uvmsvrvjpbu4vpy3tI6Ts7Fbi7GwLYewrwqEsK8AAEEAvv8Ad5aWr3qXlqiAmZidip2clZekopSlraqbsrazpbu9ua6+v7ysur67nbK6t3+otbNWnrGvKpaurQGRrawAj62tAAFBAL7/AIGYl2aEmJdei5uZUpWgnkmip6VHsLCtTb24tVnFvrtkx8C9ZsO+u1u6ubdBr7SxHqWvrQCdrasAmKyrAJWsqwCdxHWw3kbtEgAAAABJRU5ErkJggg=='
        /> */}
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