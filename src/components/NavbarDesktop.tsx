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
    <nav className='hidden fixed lg:block p-4 w-full shadow-sm'>
      <div className='max-w-[1140px] 2xl:max-w-[1536px] mx-auto lg:flex lg:justify-between w-full gap-2'>
        <div className='flex gap-2 items-center'>
          <Image
            alt='Dicoding Indonesia'
            src={'/new-ui-logo.png'}
            width={32}
            height={32}
            className='object-contain mr-6'
          />
          <div className='w-[300px]'>
            <InputNav />
          </div>
          <ul className='flex text-[.875rem]'>
            <li>
              <Link
                href='#'
                className='flex justify-center items-center py-2 px-4 w-full h-[50px] text-primary-text font-bold hover:bg-gray-100'
              >
                Learning Path
              </Link>
            </li>

            <li>
              <HoverCard>
                <HoverCardTrigger
                  className='flex justify-center items-center py-2 px-4 w-full h-[50px] text-primary-text font-bold hover:bg-gray-100 hover:cursor-pointer'
                >
                  Langganan
                </HoverCardTrigger>
                <HoverCardContent
                  className='p-0 rounded-[10px] shadow-md w-fit text-primary-text'
                >
                  <Link
                    href="#"
                    className='flex items-center p-4 hover:bg-gray-200'
                  >
                    <CreditCard className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Biaya Langganan</p>
                      <span className='text-[.9rem]'>Bebas pilih kelas dengan berlanggangan.</span>
                    </div>
                  </Link>
                  <Link
                    href="#"
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
              <HoverCard>
                <HoverCardTrigger
                  className='flex justify-center items-center p-4 w-full h-[50px] text-primary-text font-bold hover:bg-gray-100 hover:cursor-pointer'
                >
                  Program
                </HoverCardTrigger>
                <HoverCardContent
                  className='p-0 rounded-[10px] shadow-md w-fit text-primary-text'
                >
                  <Link
                    href="#"
                    className='flex items-center p-4 hover:bg-gray-200 text-[.9rem]'
                  >
                    Dicoding Bangung Negeri Batch 7
                  </Link>
                  <Link
                    href="#"
                    className='flex items-center p-4 hover:bg-gray-200 text-[.9rem]'
                  >
                    AWS Back-End Academy 2024
                  </Link>
                </HoverCardContent>
              </HoverCard>
            </li>
            <li>
              <HoverCard>
                <HoverCardTrigger
                  className='flex justify-center items-center p-4 w-full h-[50px] text-primary-text font-bold hover:bg-gray-100 hover:cursor-pointer'
                >
                  Lainnya
                </HoverCardTrigger>
                <HoverCardContent
                  className='p-0 rounded-[10px] shadow-md w-fit text-primary-text'
                >
                  <Link
                    href="#"
                    className='flex items-center p-4 hover:bg-gray-200'
                  >
                    <Rocket className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Dicoding Challenge</p>
                      <span className='text-[.9rem]'>Asah skill Anda dengan mengikuti challenge.</span>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className='flex items-center p-4 hover:bg-gray-200'
                  >
                    <Briefcase className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Dicoding Job</p>
                      <span className='text-[.9rem]'>Temukan pekerjaan sesuai skill Anda.</span>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className='flex items-center p-4 hover:bg-gray-200'
                  >
                    <Calendar className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Dicoding Event</p>
                      <span className='text-[.9rem]'>Ikuti event dan bangun jaringan developer.</span>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className='flex items-center p-4 hover:bg-gray-200'
                  >
                    <MessageCircleCode className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Dicoding Mentoring</p>
                      <span className='text-[.9rem]'>Tingkatkan skill dengan mentoring dengan expert.</span>
                    </div>
                  </Link>
                  <Link
                    href="#"
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
          <Button variant={'outline'} size={'lg'} className='text-[1rem] font-bold'>Masuk</Button>
          <Button size={'lg'} className='text-[1rem] font-bold'>Daftar</Button>
        </div>
      </div>
    </nav>
  )
}

export default NavbarDesktop