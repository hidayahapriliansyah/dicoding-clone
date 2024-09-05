import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import InputNav from './InputNav'
import Link from 'next/link'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Briefcase, Calendar, CreditCard, Gift, MessageCircleCode, Rocket } from 'lucide-react'

const NavbarDesktop = () => {
  return (
    <nav className='hidden fixed z-50 lg:block p-4 w-full shadow-sm bg-white'>
      <div className='max-w-[1140px] 2xl:max-w-[1536px] mx-auto lg:flex lg:justify-between w-full gap-2'>
        <div className='flex gap-2 items-center'>
          <a href="/" className='block w-fit h-fit'>
            <Image
              alt='Dicoding Indonesia'
              src={'/new-ui-logo.png'}
              width={32}
              height={32}
              className='object-contain mr-6'
            />
          </a>
          <div className='w-[300px]'>
            <InputNav />
          </div>
          <ul className='flex text-[.875rem]'>
            <li>
              <Link
                href='https://www.dicoding.com/learningpaths/7'
                target='_blank'
                className='flex justify-center items-center py-2 px-4 w-full h-[50px] text-primary-text font-bold hover:bg-gray-100'
              >
                Learning Path
              </Link>
            </li>

            <li>
              <HoverCard openDelay={0} closeDelay={0}>
                <HoverCardTrigger
                  className='flex justify-center items-center py-2 px-4 w-full h-[50px] text-primary-text font-bold hover:bg-gray-100 hover:cursor-pointer rounded-[4px]'
                >
                  Langganan
                </HoverCardTrigger>
                <HoverCardContent
                  align='start'
                  className='p-0 rounded-[7px] shadow-md w-fit text-primary-text -mt-1 overflow-hidden'
                >
                  <Link
                    href="https://www.dicoding.com/subscriptions/purchases"
                    target='_blank'
                    className='flex items-center p-4 hover:bg-gray-200'
                  >
                    <CreditCard className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Biaya Langganan</p>
                      <span className='text-[.9rem]'>Bebas pilih kelas dengan berlanggangan.</span>
                    </div>
                  </Link>
                  <Link
                    href="https://www.dicoding.com/login"
                    target='_blank'
                    className='flex items-center p-4 hover:bg-gray-200'
                  >
                    <CreditCard className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Aktivasi Token</p>
                      <span className='text-[.9rem]'>Aktifkan token belajar Academy.</span>
                    </div>
                  </Link>
                </HoverCardContent>
              </HoverCard>
            </li>
            <li>
              <HoverCard openDelay={0} closeDelay={0}>
                <HoverCardTrigger
                  className='flex justify-center items-center p-4 w-full h-[50px] text-primary-text font-bold hover:bg-gray-100 hover:cursor-pointer rounded-[4px]'
                >
                  Program
                </HoverCardTrigger>
                <HoverCardContent
                  align='start'
                  className='p-0 rounded-[7px] shadow-md w-fit text-primary-text -mt-1 overflow-hidden'
                >
                  <Link
                    href="https://www.dicoding.com/bangun-negeri/university"
                    target='_blank'
                    className='flex items-center p-4 hover:bg-gray-200 text-[.9rem]'
                  >
                    Dicoding Bangung Negeri Batch 7
                  </Link>
                  <Link
                    href="https://aws.dicoding.com/"
                    target='_blank'
                    className='flex items-center p-4 hover:bg-gray-200 text-[.9rem]'
                  >
                    AWS Back-End Academy 2024
                  </Link>
                </HoverCardContent>
              </HoverCard>
            </li>
            <li>
              <HoverCard openDelay={0} closeDelay={0}>
                <HoverCardTrigger
                  className='flex justify-center items-center p-4 w-full h-[50px] text-primary-text font-bold hover:bg-gray-100 hover:cursor-pointer rounded-[4px]'
                >
                  Lainnya
                </HoverCardTrigger>
                <HoverCardContent
                  align='start'
                  className='p-0 rounded-[7px] shadow-md w-fit text-primary-text -mt-1 overflow-hidden'
                >
                  <Link
                    href="https://www.dicoding.com/challenges"
                    target='_blank'
                    className='flex items-center p-4 hover:bg-gray-200'
                  >
                    <Rocket className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Dicoding Challenge</p>
                      <span className='text-[.9rem]'>Asah skill Anda dengan mengikuti challenge.</span>
                    </div>
                  </Link>
                  <Link
                    href="https://jobs.dicoding.com/"
                    target='_blank'
                    className='flex items-center p-4 hover:bg-gray-200'
                  >
                    <Briefcase className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Dicoding Job</p>
                      <span className='text-[.9rem]'>Temukan pekerjaan sesuai skill Anda.</span>
                    </div>
                  </Link>
                  <Link
                    href="https://www.dicoding.com/events"
                    target='_blank'
                    className='flex items-center p-4 hover:bg-gray-200'
                  >
                    <Calendar className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Dicoding Event</p>
                      <span className='text-[.9rem]'>Ikuti event dan bangun jaringan developer.</span>
                    </div>
                  </Link>
                  <Link
                    href="https://www.dicoding.com/mentoring"
                    target='_blank'
                    className='flex items-center p-4 hover:bg-gray-200'
                  >
                    <MessageCircleCode className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Dicoding Mentoring</p>
                      <span className='text-[.9rem]'>Tingkatkan skill dengan mentoring dengan expert.</span>
                    </div>
                  </Link>
                  <Link
                    href="https://www.dicoding.com/rewards"
                    target='_blank'
                    className='flex items-center p-4 hover:bg-gray-200'
                  >
                    <Gift className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Reward</p>
                      <span className='text-[.9rem]'>Tukarkan point dengan reward menarik.</span>
                    </div>
                  </Link>
                </HoverCardContent>
              </HoverCard>
            </li>
          </ul>
        </div>

        <div className='flex items-center gap-2'>
          <Button variant={'outline'} size={'lg'} className='text-[1rem] font-bold rounded-[2px]'>Masuk</Button>
          <a
            href="https://www.dicoding.com/registration"
            target='_blank'
            className='block w-fit h-fit'
          >
            <Button size={'lg'} className='text-[1rem] font-bold rounded-[2px]'>Daftar</Button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavbarDesktop