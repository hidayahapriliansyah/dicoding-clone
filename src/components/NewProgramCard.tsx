import Image from 'next/image'
import React from 'react'
import { LoadingImage } from './LoadingImage';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';

const NewProgramCard = ({ description, image, imgPlaceholder, organizer, title }: {
  image: string;
  imgPlaceholder: string;
  organizer: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className='z-20 flex flex-col lg:flex-row gap-4 m-4 p-5 w-full bg-white rounded-[10px] shadow-lg hover:-translate-y-3 transition-all duration-500'
    >
      <div
        className='relative z-10 w-full lg:max-w-[168px] aspect-square'
      >
        <LoadingImage
          alt={title}
          src={`/images/${image}`}
          placeholder={imgPlaceholder as PlaceholderValue}
          fill
          className='object-contain overflow-hidden'
        />
      </div>
      <div className='w-full text-primary-text mb-6 md:mb-0'>
        <p className='text-sm text-gray-500'>Oleh {organizer}</p>
        <h5 className='font-medium my-2 text-lg'>{title}</h5>
        <span className='text-sm'>{description}</span>
      </div>
    </div>
  )
}

export default NewProgramCard