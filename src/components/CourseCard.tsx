import React from 'react'
import { Course } from '../data/courses'
import Image from 'next/image'
import clsx from 'clsx'

const CourseCard = ({ image, link, title, shiftRight = false }: Course & { shiftRight?: boolean }) => {
  return (
    <a href='#' className={clsx('relative block w-[300px] lg:w-[257px] xl:w-[310px] h-[124px] bg-white  rounded-[10px] overflow-hidden lg:hover:-translate-y-1 lg:transition-all lg:duration-300', {
      'translate-x-16': shiftRight
    })}>
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className='ml-auto'
      />
      <div className='absolute flex flex-col justify-end top-0 z-10 p-3 w-full h-[124px] bg-gradient-to-r from-white from-30% to-transparent'>
        <span className='font-bold text-primary-text leading-tight w-full max-w-[50%]'>{title}</span>
      </div>
    </a>
  )
}

export default CourseCard