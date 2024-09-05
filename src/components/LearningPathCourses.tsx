import { ArrowLeft, ArrowRight, Blocks, Users } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types';
import LearningPathCourseCard from './LearningPathCourseCard'
import { LearningPaths } from '../data/learning-paths';
import { learningPathAndroid } from '../data/learning-path-android';
import clsx from 'clsx'
import { CourseLearningPath } from '../data/types';
import { learningPathBe } from '../data/learning-path-backend';
import { learningPathFe } from '../data/learning-path-front-end';
import { learningPathIos } from '../data/learning-path-ios';
import { learningPathMl } from '../data/learning-path-ml';

const LearningPathCourses = ({ selectedPath }: { selectedPath: LearningPaths }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const displayLearningPath = (path: LearningPaths): CourseLearningPath => {
    if (path === 'be') {
      return learningPathBe;
    } else if (path === 'fe') {
      return learningPathFe;
    } else if (path === 'ios') {
      return learningPathIos
    } else if (path === 'ml') {
      return learningPathMl;
    }
    return learningPathAndroid;
  }

  const lp = displayLearningPath(selectedPath);

  return (
    <div
      className='flex flex-col md:flex-row w-full pt-8 md:pb-8 md:pl-8 md:pr-0 bg-gray-100'
    >
      <div className='md:px-[15px] w-full md:max-w-[45%] lg:max-w-[40%] text-primary-text'>
        <h4 className='hidden md:inline-block my-4 lg:mb-4 lg:mt-12 font-bold text-2xl'>{lp.name}</h4>
        <div className='flex items-center gap-2 mb-4 font-bold text-[.95rem]'>
          <Blocks className='w-5 h-5' /> {lp.totalCourse} kelas
        </div>
        <div className='flex items-center gap-2 mb-4 font-bold text-[.95rem]'>
          <Users className='w-5 h-5' />
          {lp.totalStudent} siswa belajar di learning path ini
        </div>
        <div className='pt-4 border-t border-t-gray-300'>
          <p className='text-base font-medium leading-loose'>
            {lp.summary}
          </p>
        </div>
      </div>
      <div className='pl-[15px] pt-4 lg:pt-0 w-full md:max-w-[55%] lg:max-w-[60%]'>
        <div className='hidden lg:flex lg:justify-end gap-4 mr-4 mb-4'>
          <button
            className={clsx(
              'flex justify-center items-center text-primary-text p-[1px] w-8 h-8 border-2 border-primary rounded-full',
              {
                'opacity-50 cursor-not-allowed': isBeginning,
                'opacity-100': !isBeginning,
              }
            )}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          >
            <ArrowLeft className='m-0 p-0' />
          </button>
          <button
            className={clsx(
              'flex justify-center items-center text-primary-text p-[1px] w-8 h-8 border-2 border-primary rounded-full',
              {
                'opacity-50 cursor-not-allowed': isEnd,
                'opacity-100': !isEnd
              }
            )}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          >
            <ArrowRight />
          </button>
        </div>
        <Swiper
          slidesPerView={'auto'}
          shortSwipes={true}  // Mengaktifkan respons swipe pendek
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onReachBeginning={() => setIsBeginning(true)}
          onReachEnd={() => setIsEnd(true)}
          onFromEdge={() => {
            setIsBeginning(false);
            setIsEnd(false);
          }}
        >
          {
            lp.courses.map((course, i) => (
              <SwiperSlide
                key={i}
                className='lpc-card border border-gray-300 rounded-[10px] md:rounded-[4px]'
                style={{
                  marginLeft: i === 0 ? '' : '18px'
                }}
              >
                <LearningPathCourseCard
                  link={course.link}
                  hours={course.hours}
                  imgUrl={course.image}
                  imgPlaceholder={course.imgPlaceholder}
                  level={course.level}
                  rating={course.rating}
                  step={course.step}
                  summary={course.summary}
                  title={course.title}
                  totalStudents={course.totalStudent}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div >
  )
}

export default LearningPathCourses