'use client';

import clsx from 'clsx';
import { BriefcaseBusiness, Calendar, MoveRight, Rocket } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingImage } from './LoadingImage';

type Features = 'challenge' | 'event' | 'job';

const DicodingNetwork = () => {
  const [feature, setFeature] = useState<Features>('challenge');

  const fadeInOut = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
  };

  return (
    <section className='w-full py-[50px] lg:py-[100px] bg-gray-100 text-primary-text'>
      <div className='relative w-full container'>
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
                <LoadingImage
                  alt='Challenge'
                  src={'/images/homepage-dicoding-challenge-illustration.png'}
                  width={580}
                  height={390}
                  placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAADCElEQVR4AQBBAL7/ALqe//+4m///tpr7/7ic9P+7n+7/uZ3k/7CU1/+licv/n4PJ/6KG1f+skOr/tZn//7md//+3m///s5f//7CU//8AQQC+/wC3m/3/tZn4/7WZ8f+5nOv/vJ/l/7mc2/+vk8z/o4fA/5+Cv/+lic7/s5fn/8Ck///Gqv//xKj//7+j//+7n///AEEAvv8ArJDk/62Q4P+vk9z/tJfX/7aa0f+xlcT/pIiy/5d7pP+UeKX/n4O4/7SX2P/Gqvn/0LT//8+y///Iq///wqX//wBBAL7/AJt/w/+dgcH/ooW+/6eLu/+ojLL/n4Oh/41xiv99YXn/el55/4ptkP+kiLf/vqHe/8qu+f/Jrf//wKT//7ic//8AQQC+/wCOcan/kXSo/5Z6p/+cf6P/mn6Y/4xwgf91WGT/YENO/1s/TP9tUGX/jHCQ/6qOvP+6ntr/uZzl/66R5P+kiN//AEEAvv8Aj3Kn/5J2pv+YfKX/nYGg/5p9k/+Ia3j/a09W/1E1Ov9KLTX/Wz9O/31ge/+egan/sJPI/66S1P+ihtH/mHzM/wBBAL7/AKCEvv+kh73/qo68/6+TuP+rj6r/mHuN/3hcaP9bP0j/UDRA/19DVv+BZIL/ooax/7WZ0f+1mN3/qYza/56C1P8AQQC+/wC1mOD/uJzg/7+j3//Fqdz/w6fP/7GVtP+Sdo//dFdt/2ZKYv9yVXT/kHSd/7GUyv/Dp+r/w6f3/7ic9f+uku//AEEAvv8AvaH7/8Gk+v/IrPr/0bT5/9K27//Ep9j/p4u1/4lsk/95XIX/gGST/5t/uP+4nOL/yq7//8uu///ApP//t5v//wBBAL7/ALeb//+7nv//w6f//82x///Stv//yKvr/66Sy/+QdKr/f2Ka/4NmpP+ZfcX/s5fs/8On///EqP//u57//7KV//8BQQC+/wCtkf//sZX//7qd///Fqf//zLD//8Wo8f+tkdP/kHOz/31hov9/Yqn/k3bH/6uO7P+6nf//up7//7GV//+pjP//y1kKhEmbidgAAAAASUVORK5CYII='
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
                <LoadingImage
                  alt='Event'
                  src={'/images/homepage-dicoding-event-illustration.png'}
                  width={580}
                  height={390}
                  placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAACwklEQVR4AQBBAL7/AOC6OP/kvDj/6r812PHDMrX3xS2q+8cou//IJd//yib//80s///RN///1UT//9ZQ+f/VW/D30WLz8M1l/uvKZ/8AQQC+/wDSrjr/1rE6/N21ONLkuTWv67wwpfC+LLf0vynb98Er//rFMf/8yTz//MxJ//rOVvf0zWHu7cpo8ebGbP3iw27/AEEAvv8Au5s9/8CePfXHoz3M0Kg7qtesN6DdrzSz4bAy2OWzM//ntjn/6bpE/+q9Uf/owF/3479q7ty8cvLWuXf90rd5/wBBAL7/AKKGQf+niULzsI9Cy7mWQqrCm0ChyZ49tc2gO9rQoj3/06VC/9SpTf/UrFr/065o+s6udPHJrHz1w6qC/7+ohP8AQQC+/wCOdUX/lHpG9p6BSM6piEmuso5IprqSRrm+lETfwJVF/8GXSv/CmlP/wpxg/8Cebv27nnr1tp2D+bGbif+umYz/AEEAvv8AhW1I/4tySvmWek3RooNPsayKTqizjky7t49K4biPSv+4j03/t49V/7WRYf+ykm79rpJ69amRhPqkj4r/oY6N/wBBAL7/AIZvS/+NdE34mX1Q0KWGU7CwjVOnt5FQubmRTd24j0v/to1N/7OLU/+vi13/q4tp+aeLdfGiiX73nYiF/5qHiP8AQQC+/wCQd0z/l31O9aOGUs2wkFWsu5dVo8GZUrXCmE7Yv5RK/LqQSf+1jE7/sIpW/6uJYfOlh2ztoIZ19JuEfP+Zg3//AEEAvv8AnIJM/6OHT/OvkVPLvJpWqsehVqDMo1KxzKBN1cibR/jBlEX/uo9I/7OLTv+tiVjxp4dj7KGFbPOcg3L/moJ2/wFBAL7/AKSITP+rjk/zt5hUysShV6nPqFaf1KlSsNOmTNPNn0b3xphC/76RRP+2jUr/r4pT8aiHXe2ihWb1noNs/5uCcP/G8qECc4aE+gAAAABJRU5ErkJggg=='
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
                <LoadingImage
                  alt='Job'
                  src={'/images/homepage-dicoding-job-illustration.png'}
                  width={580}
                  height={390}
                  placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAADCElEQVR4AQBBAL7/ACCm//8nqf//MKr//zmn//8+of//Q5r//0mX//9Pl/r/U5n5/1Oc+v9Pn/7/S6P//0ao//9Drv//QLL//z61//8AQQC+/wAypv//OKj//0Go//9Jpf//Tp3//1KW9v9Xkuv/XZLm/2CT5P9gluX/XZnp/1me8P9Wpfn/VKz//1Kx//9RtP//AEEAvv8AUab//1am//9epv//ZKH0/2iY5P9rkNX/b4vJ/3SJw/93isH/d43C/3WRx/9zmND/cqDb/3Gp5/9xsPH/cbT2/wBBAL7/AHOm6P93puX/faPe/4Kd0v+Fk8H/h4mw/4qDpP+OgJ3/kIGa/5GEnP+QiaL/kJGt/5GdvP+UqMr/lrHW/5e23P8AQQC+/wCNp9D/kabN/5aixf+amrf/m4+l/5yElP+efYf/oXl//6N5fP+kfH//pIKG/6eNk/+rmqT/sKi1/7Ozw/+1ucr/AEEAvv8AmajH/5ynxP+ho7v/o5qs/6SOmv+kgoj/pnl6/6h1cf+pdG7/qnZx/6t9ef+uiYj/tJib/7qnrf++srv/wbjD/wBBAL7/AJGqzv+Vqcv/maXC/5yctP+dkKL/nYSQ/556gf+fdXj/oHN1/6B1d/+he4D/pYeP/6qWof+wpLP/s67A/7W0x/8AQQC+/wB5rOL/favf/4Ko2P+HoMv/iZW6/4qKqf+LgJv/i3qS/4t3jv+LeJD/jH6Y/46Jpv+Slrf/laHH/5eq0v+Xrtj/AEEAvv8AV6z8/1ys+/9kq/X/aqXr/26c3P9xks3/c4rA/3SEt/90gbP/c4G1/3OGvP90j8n/dpnY/3ai5f91qO3/c6rx/wBBAL7/ADis//8+rf//R63//1Cq//9XpPz/W5zv/1+U4/9hj9v/YYzY/2CM2f9fkOD/X5js/16g+P9cpv//WKn//1Wq//8BQQC+/wAlrP//LK7//zav//9Brf//Saj//0+h//9Tm/n/Vpby/1aU7/9VlPD/VJf3/1Oe//9Rpf//Tan//0ir//9Eq///3Hf49mhTdlsAAAAASUVORK5CYII='
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
                <a href="https://www.dicoding.com/challenges" target='_blank' className='flex items-center gap-3 font-bold'>
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
                <a
                  href="https://www.dicoding.com/events"
                  target='_blank'
                  className='flex items-center gap-3 font-bold'
                >
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
                <a
                  href="https://www.dicoding.com/jobs/old"
                  target='_blank'
                  className='flex items-center gap-3 font-bold'
                >
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
