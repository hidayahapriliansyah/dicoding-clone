import React from 'react'

const CTACreateAccount = () => {
  return (
    <section className='mt-[30px] mb-[80px] w-full px-[15px]'>
      <div className='flex flex-col justify-center items-center p-10 w-full container bg-primary rounded-md'>
        <h2 className='mb-5 text-white text-center font-medium text-2xl'>Tunggu apa lagi?</h2>
        <p className='text-center text-white mb-4'>Belajar lebih terarah dengan learning path dan code review</p>
        <a
          href="https://www.dicoding.com/registration"
          target='_blank'
          className='flex justify-center items-center mt-5 py-5 px-6 h-[40px] bg-white text-primary text-[.75rem] tracking-widest font-bold rounded-sm'
        >BUAT AKUN</a>
      </div>
    </section>
  )
}

export default CTACreateAccount