import { Search } from 'lucide-react'
import React from 'react'

const InputNav = () => {
  return (
    <div className='relative w-full  h-[50px]'>
      <Search className='absolute top-[18px] left-[15px] w-4 h-4 text-gray-400' />
      <input
        type="text"
        name="cari-pelajaran"
        id="cari-pelajaran"
        aria-label='Apa yang ingin Anda pelajari?'
        placeholder='Apa yang ingin Anda pelajari?'
        className='py-[6px] pl-[40px] pr-[6x] outline-none ring-0 w-full h-full focus:border focus:border-primary transition-all duration-300 rounded-[4px] border border-input font-medium text-[0.9rem] text-gray-950'
      />
    </div>
  )
}

export default InputNav