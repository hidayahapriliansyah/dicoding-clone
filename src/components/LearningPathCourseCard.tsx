import { Clock4, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { LoadingImage } from './LoadingImage';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';

const LearningPathCourseCard = ({
  hours,
  imgUrl,
  imgPlaceholder,
  level,
  step,
  summary,
  title,
  totalStudents,
  rating,
  link,
}: {
  imgUrl: string;
  imgPlaceholder: string;
  step: number;
  title: string;
  level: string;
  summary: string;
  hours: number;
  totalStudents: string;
  rating: number;
  link: string;
}) => {
  return (
    <a
      href={link}
      target='_blank'
      className='relative block w-full h-full bg-white overflow-hidden text-primary-text  hover:shadow-lg group'
    >
      <div className='relative w-full aspect-square group-hover:-mt-[75%] md:group-hover:-mt-[50%] transition-all duration-500 ease-in-out'>
        <LoadingImage
          src={`/images/courses/${imgUrl}`}
          alt={title}
          fill
          quality={80}
          className='absolute object-contain'
          placeholder={imgPlaceholder as PlaceholderValue}
        />
      </div>
      <div className='absolute object-top flex flex-col justify-between items-baseline md:group-hover:-mt-[25%] lg:group-hover:-mt-[45%] xl:group-hover:-mt-[25%] min-h-[326px] bg-white p-4 transition-all duration-300 ease-in-out'>
        <div>
          <div className='flex items-center gap-1 mb-2 lg:mb-1 text-xs font-bold'>
            <TrendingUp className='w-4 h-4' /> Langkah {step}
          </div>
          <h5 className='mb-2 lg:mb-4 font-bold h-[48px] md:h-[58px] leading-tight'>{title}</h5>
        </div>
        <div className='mb-4'>
          <div className='flex items-center gap-1 md:mb-2 text-xs font-bold'>
            <Image
              src={'/svg/star.svg'}
              width={16}
              height={16}
              alt='Star'
            />
            {rating}
          </div>
          <div className='flex items-center gap-1 md:mb-2 text-xs font-bold'>
            <Image
              src={'/svg/award.svg'}
              width={16}
              height={16}
              alt='Star'
            />
            Level {level}
          </div>
        </div>
        <div className='mb-4'>
          <p className='font-medium tracking-tight text-[.9rem]'>
            {summary}
          </p>
        </div>
        <div className='flex items-center gap-3 text-xs font-bold'>
          <div className='flex items-center gap-1 text-xs font-bold'>
            <Clock4 className='w-4 h-4' /> {hours} Jam
          </div>
          <div className='flex items-center gap-1 text-xs font-bold'>
            <Users className='w-4 h-4' />
            {totalStudents} siswa
          </div>
        </div>
      </div>
    </a>
  )
}

export default LearningPathCourseCard