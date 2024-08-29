'use client';

import clsx from 'clsx';
import { BriefcaseBusiness, Calendar, MoveRight, Rocket } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Features = 'challenge' | 'event' | 'job';

const DicodingNetwork = () => {
  const [feature, setFeature] = useState<Features>('challenge');

  const fadeInOut = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
  };

  return (
    <section className='w-full py-[50px] bg-gray-100 text-primary-text'>
      <div className='relative w-full max-w-[540px] sm:max-w-[720px] lg:max-w-[1140px] mx-auto px-4'>
        <div className='w-full lg:max-w-[400px] xl:max-w-[475px]'>
          <h2 className='mb-2 font-medium text-2xl'>Bergabung dengan jaringan developer terbesar</h2>
          <p className='mb-4'>Selain belajar di Academy, Anda juga bisa mengikuti kegiatan dan layanan kami yang lain.</p>
          <ul className='flex flex-wrap gap-4 mt-6 mb-4 sm:uppercase text-sm sm:text-base'>
            <li>
              <a
                href="#dicoding-challenge"
                onClick={(e) => {
                  e.preventDefault();
                  setFeature('challenge');
                }}
                className={clsx('flex justify-center font-bold items-center gap-3 p-3  hover:bg-gray-200', {
                  'bg-gray-200': feature === 'challenge'
                })}>
                <Rocket className='w-4 h-4' />
                Challenge
              </a>
            </li>
            <li>
              <a
                href="#dicoding-event"
                onClick={(e) => {
                  e.preventDefault();
                  setFeature('event');
                }}
                className={clsx('flex justify-center font-bold items-center gap-3 p-3  hover:bg-gray-200', {
                  'bg-gray-200': feature === 'event'
                })}>
                <Calendar className='w-4 h-4' />
                Event
              </a>
            </li>
            <li>
              <a
                href="#dicoding-job"
                onClick={(e) => {
                  e.preventDefault();
                  setFeature('job');
                }}
                className={clsx('flex justify-center font-bold items-center gap-3 p-3  hover:bg-gray-200', {
                  'bg-gray-200': feature === 'job'
                })}>
                <BriefcaseBusiness className='w-4 h-4' />
                Job
              </a>
            </li>
          </ul>
          <hr className='my-4' />
        </div>
        <div className='lg:max-w-[400px] xl:max-w-[475px]'>
          <AnimatePresence mode="wait">
            {feature === 'challenge' && (
              <motion.div
                key="challenge"
                className='lg:absolute lg:top-0 lg:right-4 w-full lg:max-w-[578px]'
                initial="hidden"
                animate="show"
                exit="exit"
                variants={fadeInOut}
              >
                <Image
                  alt='Challenge'
                  src={'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-dicoding-challenge-illustration.png'}
                  width={580}
                  height={390}
                />
              </motion.div>
            )}
            {feature === 'event' && (
              <motion.div
                key="event"
                className='lg:absolute lg:top-0 lg:right-4 w-full lg:max-w-[578px]'
                initial="hidden"
                animate="show"
                exit="exit"
                variants={fadeInOut}
              >
                <Image
                  alt='Event'
                  src={'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-dicoding-event-illustration.png'}
                  width={580}
                  height={390}
                />
              </motion.div>
            )}
            {feature === 'job' && (
              <motion.div
                key="job"
                className='lg:absolute lg:top-0 lg:right-4 w-full lg:max-w-[578px]'
                initial="hidden"
                animate="show"
                exit="exit"
                variants={fadeInOut}
              >
                <Image
                  alt='Job'
                  src={'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-dicoding-job-illustration.png'}
                  width={580}
                  height={390}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {feature === 'challenge' && (
              <motion.div
                key="text-challenge"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={fadeInOut}
              >
                <h3 className='mt-6 mb-4 font-semibold text-xl'>Dicoding Challenge</h3>
                <p className='mb-4 text-[.9rem]'>Kami telah menyelenggarakan berbagai macam challenge dengan jutaan hadiah. Dengan platform Challenge, developer bisa mengasah skill yang dipelajari dari Academy.</p>
                <a href="#" className='flex items-center gap-3 font-bold'>
                  Lihat Challenge
                  <MoveRight />
                </a>
              </motion.div>
            )}
            {feature === 'event' && (
              <motion.div
                key="text-event"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={fadeInOut}
              >
                <h3 className='mt-6 mb-4 font-semibold text-xl'>Dicoding Event</h3>
                <p className='mb-4 text-[.9rem]'>Berkolaborasi dengan komunitas developer, kami telah menyelenggarakan event di berbagai kota yang dihadiri puluhan ribu developer dan praktisi teknologi Indonesia.</p>
                <a href="#" className='flex items-center gap-3 font-bold'>
                  Lihat Event
                  <MoveRight />
                </a>
              </motion.div>
            )}
            {feature === 'job' && (
              <motion.div
                key="text-job"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={fadeInOut}
              >
                <h3 className='mt-6 mb-4 font-semibold text-xl'>Dicoding Job</h3>
                <p className='mb-4 text-[.9rem]'>Bekerjasama dengan beberapa industri, kami telah membantu developer Indonesia dalam mencari lapangan pekerjaan yang sesuai dengan skillnya.</p>
                <a href="#" className='flex items-center gap-3 font-bold'>
                  Lihat Job
                  <MoveRight />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DicodingNetwork;
