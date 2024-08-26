import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import Image from 'next/image'
import WhyDicodingAccordion from './WhyDicodingAccordion'

const WhyDicoding = () => {
  return (
    <section className='w-full py-16 px-[15px] max-w-[510px] md:max-w-[930px] lg:max-w-[1140px] mx-auto font-[500]'>
      <h2 className='mb-4 font-medium text-center text-[1.5rem] lg:text-[2rem] text-primary-text '>Kenapa Dicoding Academy Berbeda?</h2>
      <p className='pb-12 text-center text-primary-text'>Saatnya bijak memilih sumber belajar. Tak hanya materi yang terjamin, <br className='hidden md:inline' /> Dicoding Academy juga memiliki reviewer profesional yang akan mengulas kode Anda.</p>

      <WhyDicodingAccordion />
    </section>
  )
}

export default WhyDicoding