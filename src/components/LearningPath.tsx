import Image from 'next/image'
import React from 'react'

const LearningPath = () => {
  return (
    <section className='text-primary-text'>
      <div className='w-full pt-[48px] px-[15px]'>
        <h2 className='mb-4 font-extrabold text-center text-2xl lg:text-[2rem]'>Learning Path</h2>
        <p className='mx-auto w-full sm:max-w-[510px] md:max-w-[450px] lg:max-w-[540px] font-[500] text-center'>Learning path akan membantu Anda dalam belajar di Academy dengan kurikulum yang dibangun bersama pelaku industri ternama.</p>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-2 px-[15px] py-12'>
        <Image
          src={'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/academy-googleatp-3.png'}
          alt='Image'
          width={204}
          height={40}
        />
        <Image
          src={'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/google-cloud-partner.png'}
          alt='Image'
          width={164}
          height={50}
        />
        <Image
          src={'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/google-for-education-partner.jpg'}
          alt='Image'
          width={180}
          height={50}
        />
      </div>
    </section>
  )
}

export default LearningPath