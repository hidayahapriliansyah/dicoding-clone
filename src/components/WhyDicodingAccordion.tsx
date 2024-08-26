'use client'

import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion';

type ItemValues = 'item-1' | 'item-2' | 'item-3' | 'item-4';

const WhyDicodingAccordion = () => {
  const [choosenFeature, setChoosenFeature] = useState<ItemValues>('item-1')
  const handleChangeValue = (value: ItemValues) => {
    if (value as unknown as string !== '') {
      setChoosenFeature(value)
    }
  }

  return (
    <div className='flex justify-center items-center w-full md:max-w-[720px] lg:max-w-full mx-auto'>
      <Accordion
        type="single"
        collapsible
        className='w-full md:w-[40%]'
        defaultValue='item-1'
        onValueChange={handleChangeValue}
      >
        <ul className='bg-gray-50'>
          <li>
            <AccordionItem
              value="item-1"
              className='border-none'
            >
              <AccordionTrigger
                className='px-6 w-full text-base lg:text-xl text-primary-text text-left font-bold lg:font-extrabold hover:no-underline'
              >Kurikulum standar industri global</AccordionTrigger>
              <AccordionContent
                className='w-full text-base text-primary-text'
              >
                <div className='w-full h-[129px] md:h-fit lg:h-[129px] px-6'>
                  Kurikulum dikembangkan bersama perusahaan dan pemilik teknologi dunia sesuai kebutuhan industri terkini.
                </div>
                <Image
                  alt='Image Kurikulum'
                  src='/images/feature-1-kurikulum-global-3.png'
                  width={510}
                  height={335}
                  className='md:hidden w-full mx-auto'
                />
              </AccordionContent>
            </AccordionItem>
          </li>
          <li>
            <AccordionItem value="item-2" className='border-none'>
              <AccordionTrigger
                className='px-6 w-full text-base lg:text-xl text-primary-text text-left font-bold lg:font-extrabold hover:no-underline'
              >Belajar flexibel sesuai jadwal Anda</AccordionTrigger>
              <AccordionContent
                className='w-full text-base text-primary-text'
              >
                <div className='w-full h-[129px] md:h-fit lg:h-[129px] px-6 '>
                  Belajar kapan pun, di mana pun, secara mandiri. Bebas memilih kelas sesuai minat belajar. Akses seumur hidup ke kelas dan forum diskusi setelah lulus.
                </div>
                <Image
                  alt='Image Kurikulum'
                  src='/images/feature-2-belajar-fleksibel-1.png'
                  width={510}
                  height={335}
                  className='md:hidden w-full mx-auto'
                />
              </AccordionContent>
            </AccordionItem>
          </li>
          <li>
            <AccordionItem value="item-3" className='border-none'>
              <AccordionTrigger
                className='px-6 w-full text-base lg:text-xl text-primary-text text-left font-bold lg:font-extrabold hover:no-underline'
              >Code Review dari Developer Expert</AccordionTrigger>
              <AccordionContent
                className='w-full text-base text-primary-text'
              >
                <div className='w-full h-[129px] md:h-fit lg:h-[129px] px-6 '>
                  Validasi skill Anda melalui 1-on-1 Professional Code Review yang diberikan langsung oleh Developer Expert.
                </div>
                <Image
                  alt='Image Kurikulum'
                  src='/images/feature-3-code-review-1.png'
                  width={510}
                  height={335}
                  className='md:hidden w-full mx-auto'
                />
              </AccordionContent>
            </AccordionItem>
          </li>
          <li>
            <AccordionItem value="item-4" className='border-none'>
              <AccordionTrigger
                className='px-6 w-full text-base lg:text-xl text-primary-text text-left font-bold lg:font-extrabold hover:no-underline'
              >Alumni terpercaya dari berbagai perusahaan</AccordionTrigger>
              <AccordionContent
                className='w-full text-base text-primary-text'
              >
                <div className='w-full h-[129px] md:h-fit lg:h-[129px] px-6 '>
                  Sertifikat yang membuktikan pengetahuan fundamental beserta keterampilan nyata yang diinginkan perusahaan global.
                </div>
                <Image
                  alt='Image Kurikulum'
                  src='/images/feature-4-alumni-terpercaya-1.png'
                  width={510}
                  height={335}
                  className='md:hidden w-full mx-auto'
                />
              </AccordionContent>
            </AccordionItem>
          </li>
        </ul>
      </Accordion>
      <div className='hidden md:block w-[60%] h-full max-h-[513] relative'>
        <AnimatePresence>
          {
            choosenFeature === 'item-1' && (
              <motion.div
                key='item-1'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='mx-auto'
              >
                <Image
                  alt='Image'
                  src='/images/feature-1-kurikulum-global-3.png'
                  width={650}
                  height={420}
                />
              </motion.div>
            )
          }
          {
            choosenFeature === 'item-2' && (
              <motion.div
                key='item-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='mx-auto'
              >
                <Image
                  alt='Image'
                  src='/images/feature-2-belajar-fleksibel-1.png'
                  width={650}
                  height={420}
                />
              </motion.div>
            )
          }
          {
            choosenFeature === 'item-3' && (
              <motion.div
                key='item-3'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='mx-auto'
              >
                <Image
                  alt='Image'
                  src='/images/feature-3-code-review-1.png'
                  width={650}
                  height={420}
                />
              </motion.div>
            )
          }
          {
            choosenFeature === 'item-4' && (
              <motion.div
                key='item-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='mx-auto'
              >
                <Image
                  alt='Image'
                  src='/images/feature-4-alumni-terpercaya-1.png'
                  width={650}
                  height={420}
                />
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </div>
  )
}

export default WhyDicodingAccordion