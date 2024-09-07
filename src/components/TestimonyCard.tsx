import Image from 'next/image'
import React from 'react'
import { Testimony } from '../data/testimonies'
import { MoveRight } from 'lucide-react'
import { LoadingImage } from './LoadingImage'
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'

const TestimonyCard = ({
  image,
  imgPlaceholder,
  company,
  completedClass,
  description,
  name,
  profession,
  link,
}: Testimony) => {
  return (
    <div className='flex flex-col md:flex-row-reverse w-full'>
      <div className='relative w-full md:max-w-[300px] lg:max-w-[400px] xl:max-w-[475px] h-[250px] md:h-[390px] overflow-hidden'>
        <LoadingImage
          alt={name}
          src={`/images/${image}`}
          fill
          sizes='100%'
          loading='lazy'
          placeholder={imgPlaceholder as PlaceholderValue}
          className='object-cover object-top w-auto h-auto'
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
        <a
          href={link}
          target='_blank'
          className='flex items-center gap-2 ml-auto mb-4 w-fit font-bold text-sm lg:text-base group'
        >
          Baca kisahnya
          <MoveRight className='group-hover:translate-x-1 transition-all duration-200' />
        </a>
      </div>
    </div>
  )
}

export default TestimonyCard