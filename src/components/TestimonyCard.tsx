import Image from 'next/image'
import React from 'react'
import { Testimony } from '../data/testimonies'
import { MoveRight } from 'lucide-react'

const TestimonyCard = ({ image, company, completedClass, description, name, profession }: Testimony) => {
  return (
    <div className='flex flex-col md:flex-row-reverse w-full'>
      <div className='relative w-full md:max-w-[300px] lg:max-w-[400px] xl:max-w-[475px] h-[250px] md:h-[390px] overflow-hidden'>
        <Image
          alt={name}
          src={image}
          layout='fill'
          objectFit='cover'
          objectPosition='top'
        />
      </div>
      <div className='p-6 lg:p-12 w-full'>
        <p className='mb-6 font-medium text-[0.9rem] lg:text-base tracking-tight'>&quot;{description}&quot;</p>
        <small>
          {name},
          <br />
          {profession} - <b>{company}</b>
          <br />
          Lulusan{' '}{completedClass}
        </small>
        <hr className='my-4' />
        <a href="#" className='flex items-center gap-2 ml-auto mb-4 w-fit font-bold text-sm lg:text-base group'>
          Baca kisahnya
          <MoveRight className='group-hover:translate-x-1 transition-all duration-200' />
        </a>
      </div>
    </div>
  )
}

export default TestimonyCard