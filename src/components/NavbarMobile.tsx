'use client'

import { Briefcase, Calendar, CreditCard, Gift, MessageCircleCode, MoveUpRight, Rocket, Search, X } from 'lucide-react';
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import clsx from 'clsx';
import InputNav from './InputNav';
import ButtonMasukDialog from './ButtonMasukDialog';


const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  return (
    <nav className='lg:hidden fixed z-40 py-4 px-8 flex justify-between items-center h-[66px] w-full bg-white shadow-md'>
      <a href="/" className='block w-fit h-fit'>
        <Image
          alt='Dicoding Indonesia'
          src={'/new-ui-logo.png'}
          width={32}
          height={32}
          className='object-contain'
        />
      </a>

      <button
        name='Button Menu'
        className='flex flex-col justify-center items-center gap-1 w-[58px] h-[50px] py-2 px-4 hover:bg-black/10 rounded-[2px] group'
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label='btn-burger-nav'
      >
        <div className='w-[24px] h-[2px] bg-primary group-focus-within:rotate-[350deg] transition-all duration-500'></div>
        <div className='w-[24px] h-[2px] bg-primary group-focus-within:rotate-[350deg] transition-all duration-500'></div>
        <div className='w-[24px] h-[2px] bg-primary group-focus-within:rotate-[350deg] transition-all duration-500'></div>
      </button>

      <div className={clsx('fixed top-0 right-0 z-50 w-full h-screen bg-white transition-all duration-300 overflow-y-hidden', {
        '-translate-y-[100%] opacity-50': !isOpen,
        'translate-y-0 opacity-100': isOpen,
      })}>
        <div className='flex justify-between items-center p-6 w-full h-[98px]'>
          <div className='relative w-[80%]'>
            <InputNav />
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label='btn-burger-nav-close'
          >
            <X />
          </button>
        </div>

        <div className='flex justify-center w-full bg-gray-50 gap-4 p-6'>
          <ButtonMasukDialog />
          <a href="https://www.dicoding.com/registration" target='_blank' className='block w-fit h-fit'>
            <Button
              size={'lg'}
              className='text-[1rem] font-bold rounded-[2px]'
              aria-label='register-cta-nav-mobile'
            >Daftar</Button>
          </a>
        </div>

        <ul>
          <li>
            <Link
              href='https://www.dicoding.com/learningpaths/7'
              target='_blank'
              className='flex justify-between py-4 px-6 w-full text-base text-primary-text font-bold hover:underline '>
              Learning Path
              <MoveUpRight className='w-4 h-4 text-gray-400' />
            </Link>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className='border-none'>
                <AccordionTrigger
                  className='px-6 w-full text-base text-primary-text font-bold'
                >Langganan</AccordionTrigger>
                <AccordionContent
                  className='px-6 w-full text-base text-primary-text'
                >
                  <Link
                    href="https://www.dicoding.com/subscriptions/purchases"
                    target='_blank'
                    className='flex items-center py-4 hover:bg-gray-200'
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
                    className='flex items-center py-4 hover:bg-gray-200'
                  >
                    <CreditCard className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Aktivasi Token</p>
                      <span className='text-[.9rem]'>Aktifkan token belajar Academy.</span>
                    </div>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className='border-none'>
                <AccordionTrigger
                  className='px-6 w-full text-base text-primary-text font-bold'
                >Program</AccordionTrigger>
                <AccordionContent
                  className='px-6 w-full text-base text-primary-text'
                >
                  <Link
                    href="https://www.dicoding.com/bangun-negeri/university"
                    target='_blank'
                    className='flex items-center py-4 hover:bg-gray-200 text-[.9rem]'
                  >
                    Dicoding Bangung Negeri Batch 7
                  </Link>
                  <Link
                    href="https://aws.dicoding.com/"
                    target='_blank'
                    className='flex items-center py-4 hover:bg-gray-200 text-[.9rem]'
                  >
                    AWS Back-End Academy 2024
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className='border-none'>
                <AccordionTrigger
                  className='px-6 w-full text-base text-primary-text font-bold'
                >Lainnya</AccordionTrigger>
                <AccordionContent
                  className='px-6 w-full text-base text-primary-text'
                >
                  <Link
                    href="https://www.dicoding.com/challenges"
                    target='_blank'
                    className='flex items-center py-4 hover:bg-gray-200'
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
                    className='flex items-center py-4 hover:bg-gray-200'
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
                    className='flex items-center py-4 hover:bg-gray-200'
                  >
                    <Calendar className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Dicoding Event</p>
                      <span className='text-[.9rem]'>Ikuti event dan bangun jaringan developer.</span>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className='flex items-center py-4 hover:bg-gray-200'
                  >
                    <MessageCircleCode className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Dicoding Mentoring</p>
                      <span className='text-[.9rem]'>Tingkatkan skill dengan mentoring dengan expert.</span>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className='flex items-center py-4 hover:bg-gray-200'
                  >
                    <Gift className='w-4 h-4' />
                    <div className='w-full ml-4'>
                      <p className='text-[.9rem] font-bold'>Reward</p>
                      <span className='text-[.9rem]'>Tukarkan point dengan reward menarik.</span>
                    </div>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarMobile