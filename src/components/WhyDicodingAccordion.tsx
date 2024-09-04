'use client'

import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingImage } from './LoadingImage';

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
                <LoadingImage
                  alt='Image Kurikulum'
                  src='/images/feature-1-kurikulum-global-3.png'
                  width={510}
                  height={335}
                  className='md:hidden w-full mx-auto'
                  placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAACfElEQVR4AQBBAL7/AP76////+///////////////////+vb8/+fi6f/a1tz/4Nzi//Pv9f/////////////+///8+P7//fn////9//8AQQC+/wD///////////////////////////Pv9f/d2d//0c3T/9jU2v/u6fD///3//////////f///Pf+//76/////v//AEEAvv8A//////////////////////j0+v/i3uT/ysbM/766wP/Jxcv/4t7k//j0+v///P///Pj+//n1+//9+f///////wBBAL7/AP/+/////f////v///j0+v/n4+n/y8fN/7Cssv+moaj/tLC2/9LO1P/s6O7/9vL4//Pv9f/y7vT/+PT6///8//8AQQC+/wD49Pr/+PT6//Xx9//s5+7/1tLY/7Wxt/+YlJr/j4uR/6KepP/Fwcf/4t7k/+zo7v/q5uz/6eXr//Lu9P/79/3/AEEAvv8A8e3z//Lu9P/w7PL/5uLo/87K0P+rp63/jYmP/4aCiP+cmJ7/wr7E/+Dc4v/p5ev/5eHn/+Tg5//u6vD/+PT6/wBBAL7/APLu9P/18ff/9/P5/+7q8P/V0df/sa2z/5OPlf+NiY//pqKo/8zIzv/p5ev/8Ovy/+nl6//n4+n/8Ozy//v3/f8AQQC+/wD8+P7///3/////////+///5+Pp/8K+xP+koKb/n5uh/7i0uv/f2uH/+fX7//z4/v/y7vT/7urw//fy+f///v//AUEAvv8A//////////////////////Xx9//QzNL/sq60/62pr//Hwsn/7Oju////////////+vb8//Tw9v/8+P7///////GBEcojM11XAAAAAElFTkSuQmCC'
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
                <LoadingImage
                  alt='Image Kurikulum'
                  src='/images/feature-2-belajar-fleksibel-1.png'
                  placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAACwklEQVR4AQBBAL7/ANLZ4ADS2uIR1d3lSdrk7Hnh7PSN5/P6gen0+2bj7fNU1d7hWcTKy3S1uLeTsK6rnLWxq4HEvLRG1crBBODUygAAQQC+/wDW2d8z1trgWdjd45Lc4ujD4+rw2Onx9s3q8vez5ezwoNjd36THycm+ubi127OuqeK4sKnExrqxh9bIvUPg0cYWAEEAvv8A3Nncc9za3Jrc297V3+Dj/+Xm6f/r7fD/7e/x++jq6+jc3NvszMnH/764s/+4rqf/vK+l/8m4rb/XxLd44c2/SgBBAL7/AOLZ2HDh2diX4NnY0+Hc2//m4eH/6+jn/+7r6v/r5+Xu4dvY8tPKxf/FurP/v7Cm/8Kvo/zMt6m42cGybuLJuT4AQQC+/wDl2NVC4tfUaeDV0qXg1tTa49vZ8+ni4O3t5uTX7OXhyOTc183YzcflzL61/MWzqfvHsqXU0LepjtvAsEPix7YSAEEAvv8A4tbTLN/U0FPb0c6O2dDOwtzU0tvi3NnV6OLfwOrj4LLm3dm53NHM09HEvOzLurDsy7erxtK7rYDcwrM14si4BABBAL7/ANzT0TvY0M5h0szKms/KyczSzs3i2NbV2+De3sbl4+K45ODewd3X1N7UzMb6zsK7/c6/tdrUwbaW28e7TOHMvxwAQQC+/wDT0NFAzszNZMfHyJrExMbIxsjK283R09HX29653+PlrOHk5bbd3d3V1tTS9NDLx/vQx8Lb1MnCmtvNxVLg0cgjAEEAvv8Ays3QGMXJzDq9w8duucDFmLvEyafEzdOZz9rfgNnj6HHd5ut73OPmnNba3L7R09LI0M/Mq9TPzG3a088n3tbRAAFBAL7/AMXM0QC/x8wIuMHGOrO+xGK1wchuvsvTXsrZ4EPW5Os02+jvPtvm61/W3uKD0dfZjtHT03PU09I32dfUAN7a1wDLI+itn8OmhgAAAABJRU5ErkJggg=='
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
                <LoadingImage
                  alt='Image Kurikulum'
                  src='/images/feature-3-code-review-1.png'
                  placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAACfElEQVR4AQBBAL7/APfz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f8AQQC+/wD38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/AEEAvv8A9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5/wBBAL7/APfz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f8AQQC+/wD38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/AEEAvv8A9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5/wBBAL7/APfz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f8AQQC+/wD38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/AUEAvv8A9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//dLLz/CKED3AAAAAElFTkSuQmCC'
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
                <LoadingImage
                  alt='Image Kurikulum'
                  src='/images/feature-4-alumni-terpercaya-1.png'
                  placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAACwklEQVR4AQBBAL7/AI2JhwCIhIIAgHx6BXh0ckhzb21sdG9tbXh0cll/e3lHiISCSo+LiWCWkpB5nJiWfKGdm1uno6Ebq6elAK2ppwAAQQC+/wCTj40AjoqIHYeDgWaAe3mpe3d1znx4ds+AfHq6h4OBp4+LiaeWkpC7nJeV0aCcmtKloZ+vqqakbq6qqCawrKoAAEEAvv8AnpqYNpqWlGaTj42wjYmH9IqGhP+Lh4X/j4uJ/5aSkPGcmJbuop6c/6aioP+ppaP/rKim6LCsqqSzr61btbGvLABBAL7/AKyophappKJHo5+dk5+bmNqdmZf/npqY/6Ofne6ppaPYrqqo07KurOC0sK7vtbGv6baysMC4tLJ7ura0MLy4tQEAQQC+/wC6trQAuLSyAbSwrlCxrauZsa2rw7Swrse5tbOyvrq4m8K+vJXEwL6gw7+9rcK+vKbCvbt8wr68NsO/vQDDv70AAEEAvv8Ax8PBAMXBvwPDv71Twr68n8TAvsvJxcPRzsrIvNPPzabW0tCf1tLQqtPPzbfQzMqvzcnHhszIxkHMyMUAzMjGAABBAL7/ANDMyhfQzMpLz8vJndHNy+rV0c//29fV/+Hd2//m4uDy6OTi6+bi4Pbi3tz/3NjW/djU0tXV0c+S1NDOStTQzhsAQQC+/wDW0tA219PRa9jU0r3b19X/4d3b/+nl4//w7Or/9fHv//by8P/z7+3/7enn/+fj4P/h3dv13dnXs9vX1W3a1tQ/AEEAvv8A2tbUANvX1SPd2dd14t7cwunl4+7y7uzy+vb03P/7+cL//Pq4/Pj2wvby8M/u6ujL5+PhpuPe3Gbg3Nog39vZAAFBAL7/ANvX1QDd2dcA4NzaFOXh32Dt6eeM9/Pxj//7+Xf///9c////Uv/9+1v69vRo8u7sZOrm5D/l4d8A49/dAOLe3ABXFLp7004BmwAAAABJRU5ErkJggg=='
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
                <LoadingImage
                  alt='Image'
                  src='/images/feature-1-kurikulum-global-3.png'
                  placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAACfElEQVR4AQBBAL7/AP76////+///////////////////+vb8/+fi6f/a1tz/4Nzi//Pv9f/////////////+///8+P7//fn////9//8AQQC+/wD///////////////////////////Pv9f/d2d//0c3T/9jU2v/u6fD///3//////////f///Pf+//76/////v//AEEAvv8A//////////////////////j0+v/i3uT/ysbM/766wP/Jxcv/4t7k//j0+v///P///Pj+//n1+//9+f///////wBBAL7/AP/+/////f////v///j0+v/n4+n/y8fN/7Cssv+moaj/tLC2/9LO1P/s6O7/9vL4//Pv9f/y7vT/+PT6///8//8AQQC+/wD49Pr/+PT6//Xx9//s5+7/1tLY/7Wxt/+YlJr/j4uR/6KepP/Fwcf/4t7k/+zo7v/q5uz/6eXr//Lu9P/79/3/AEEAvv8A8e3z//Lu9P/w7PL/5uLo/87K0P+rp63/jYmP/4aCiP+cmJ7/wr7E/+Dc4v/p5ev/5eHn/+Tg5//u6vD/+PT6/wBBAL7/APLu9P/18ff/9/P5/+7q8P/V0df/sa2z/5OPlf+NiY//pqKo/8zIzv/p5ev/8Ovy/+nl6//n4+n/8Ozy//v3/f8AQQC+/wD8+P7///3/////////+///5+Pp/8K+xP+koKb/n5uh/7i0uv/f2uH/+fX7//z4/v/y7vT/7urw//fy+f///v//AUEAvv8A//////////////////////Xx9//QzNL/sq60/62pr//Hwsn/7Oju////////////+vb8//Tw9v/8+P7///////GBEcojM11XAAAAAElFTkSuQmCC'
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
                <LoadingImage
                  alt='Image'
                  src='/images/feature-2-belajar-fleksibel-1.png'
                  placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAACwklEQVR4AQBBAL7/ANLZ4ADS2uIR1d3lSdrk7Hnh7PSN5/P6gen0+2bj7fNU1d7hWcTKy3S1uLeTsK6rnLWxq4HEvLRG1crBBODUygAAQQC+/wDW2d8z1trgWdjd45Lc4ujD4+rw2Onx9s3q8vez5ezwoNjd36THycm+ubi127OuqeK4sKnExrqxh9bIvUPg0cYWAEEAvv8A3Nncc9za3Jrc297V3+Dj/+Xm6f/r7fD/7e/x++jq6+jc3NvszMnH/764s/+4rqf/vK+l/8m4rb/XxLd44c2/SgBBAL7/AOLZ2HDh2diX4NnY0+Hc2//m4eH/6+jn/+7r6v/r5+Xu4dvY8tPKxf/FurP/v7Cm/8Kvo/zMt6m42cGybuLJuT4AQQC+/wDl2NVC4tfUaeDV0qXg1tTa49vZ8+ni4O3t5uTX7OXhyOTc183YzcflzL61/MWzqfvHsqXU0LepjtvAsEPix7YSAEEAvv8A4tbTLN/U0FPb0c6O2dDOwtzU0tvi3NnV6OLfwOrj4LLm3dm53NHM09HEvOzLurDsy7erxtK7rYDcwrM14si4BABBAL7/ANzT0TvY0M5h0szKms/KyczSzs3i2NbV2+De3sbl4+K45ODewd3X1N7UzMb6zsK7/c6/tdrUwbaW28e7TOHMvxwAQQC+/wDT0NFAzszNZMfHyJrExMbIxsjK283R09HX29653+PlrOHk5bbd3d3V1tTS9NDLx/vQx8Lb1MnCmtvNxVLg0cgjAEEAvv8Ays3QGMXJzDq9w8duucDFmLvEyafEzdOZz9rfgNnj6HHd5ut73OPmnNba3L7R09LI0M/Mq9TPzG3a088n3tbRAAFBAL7/AMXM0QC/x8wIuMHGOrO+xGK1wchuvsvTXsrZ4EPW5Os02+jvPtvm61/W3uKD0dfZjtHT03PU09I32dfUAN7a1wDLI+itn8OmhgAAAABJRU5ErkJggg=='
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
                <LoadingImage
                  alt='Image'
                  src='/images/feature-3-code-review-1.png'
                  placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAACfElEQVR4AQBBAL7/APfz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f8AQQC+/wD38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/AEEAvv8A9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5/wBBAL7/APfz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f8AQQC+/wD38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/AEEAvv8A9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5/wBBAL7/APfz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f8AQQC+/wD38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/AUEAvv8A9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//dLLz/CKED3AAAAAElFTkSuQmCC'
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
                <LoadingImage
                  alt='Image'
                  src='/images/feature-4-alumni-terpercaya-1.png'
                  placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAACwklEQVR4AQBBAL7/AI2JhwCIhIIAgHx6BXh0ckhzb21sdG9tbXh0cll/e3lHiISCSo+LiWCWkpB5nJiWfKGdm1uno6Ebq6elAK2ppwAAQQC+/wCTj40AjoqIHYeDgWaAe3mpe3d1znx4ds+AfHq6h4OBp4+LiaeWkpC7nJeV0aCcmtKloZ+vqqakbq6qqCawrKoAAEEAvv8AnpqYNpqWlGaTj42wjYmH9IqGhP+Lh4X/j4uJ/5aSkPGcmJbuop6c/6aioP+ppaP/rKim6LCsqqSzr61btbGvLABBAL7/AKyophappKJHo5+dk5+bmNqdmZf/npqY/6Ofne6ppaPYrqqo07KurOC0sK7vtbGv6baysMC4tLJ7ura0MLy4tQEAQQC+/wC6trQAuLSyAbSwrlCxrauZsa2rw7Swrse5tbOyvrq4m8K+vJXEwL6gw7+9rcK+vKbCvbt8wr68NsO/vQDDv70AAEEAvv8Ax8PBAMXBvwPDv71Twr68n8TAvsvJxcPRzsrIvNPPzabW0tCf1tLQqtPPzbfQzMqvzcnHhszIxkHMyMUAzMjGAABBAL7/ANDMyhfQzMpLz8vJndHNy+rV0c//29fV/+Hd2//m4uDy6OTi6+bi4Pbi3tz/3NjW/djU0tXV0c+S1NDOStTQzhsAQQC+/wDW0tA219PRa9jU0r3b19X/4d3b/+nl4//w7Or/9fHv//by8P/z7+3/7enn/+fj4P/h3dv13dnXs9vX1W3a1tQ/AEEAvv8A2tbUANvX1SPd2dd14t7cwunl4+7y7uzy+vb03P/7+cL//Pq4/Pj2wvby8M/u6ujL5+PhpuPe3Gbg3Nog39vZAAFBAL7/ANvX1QDd2dcA4NzaFOXh32Dt6eeM9/Pxj//7+Xf///9c////Uv/9+1v69vRo8u7sZOrm5D/l4d8A49/dAOLe3ABXFLp7004BmwAAAABJRU5ErkJggg=='
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