import React from 'react'
import Image from 'next/image'
import clsx from 'clsx';
import { LearningPaths } from '../data/learning-paths';

const LearningPathOptionCard = ({ title, imgUrl, badge, path, selectedPath }: {
  imgUrl: string,
  title: string,
  badge: string,
  path: LearningPaths,
  selectedPath: LearningPaths,
}) => {
  return (
    <div
      className={clsx('relative flex justify-center items-start h-full bg-blue-400 transition-all duration-300 rounded-[5px] overflow-hidden hover:cursor-pointer hover:opacity-100', {
        'opacity-100': path === selectedPath,
        'opacity-80': path !== selectedPath,
        'w-[350px]': path === selectedPath,
        'w-[160.5px] lg:w-[220.5px] xl:w-[265.5px]': path !== selectedPath,
      })}
    >
      <Image
        alt={title}
        src={imgUrl}
        width={350}
        height={190}
        className='absolute h-full object-none object-bottom'
      />
      <Image
        src={badge}
        alt={`Badge ${title}`}
        width={48}
        height={48}
        quality={50}
        className='absolute top-4 right-4'
      />
    </div>
  )
}

export default LearningPathOptionCard