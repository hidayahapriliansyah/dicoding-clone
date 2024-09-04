'use client'

import React from 'react'
import NewProgramSlider from './NewProgramSlider'
import NewProgramCard from './NewProgramCard'

const NewProgram = () => {
  return (
    <section
      className='py-12 w-full bg-gray-100'
    >
      <div className='flex flex-col lg:flex-row container'>
        <div className='px-[15px] mb-4 lg:mt-16 md:w-[690px] lg:w-[40%] mx-auto'>
          <h2 className='text-[1.5rem] lg:text-[2rem] lg:font-medium text-primary-text mb-2'>Program Terbaru Kami</h2>
          <p className='text-primary-text lg:max-w-[70%]'>Bekerja sama dengan partner, kami menyelenggarakan beberapa program untuk mendukung developer Indonesia.</p>
        </div>

        <div className='w-full md:w-[690px] lg:w-[60%] py-4 px-3 lg:py-0 mx-auto'>
          <NewProgramSlider />
        </div>
      </div>
    </section>
  )
}

export default NewProgram