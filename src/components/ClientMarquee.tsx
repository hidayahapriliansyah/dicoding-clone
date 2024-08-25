import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { clients } from '../data/clients'

const ClientMarquee = () => {
  return (
    <div className='lg:hidden mt-8 w-full px-4'>
      <Marquee
        speed={40}
        className='mb-6 overflow-hidden'
      >
        {
          clients.slice(0, 9).map((client, i) => (
            <div
              key={i}
              className='flex items-center w-full max-w-[160px] h-[64px] py-2 border border-gray-300 rounded-sm mx-3'
            >
              <Image
                alt={client.title}
                src={client.imageLink}
                width={180}
                height={50}
                className='p-8'
              />
            </div>
          ))
        }
      </Marquee>
      <Marquee
        speed={40}
        className='overflow-hidden'
      >
        {
          clients.slice(8, 18).map((client, i) => (
            <div
              key={i}
              className='flex items-center w-full max-w-[160px] h-[64px] py-2 border border-gray-300 rounded-sm mx-3'
            >
              <Image
                alt={client.title}
                src={client.imageLink}
                width={180}
                height={50}
                className='p-8'
              />
            </div>
          ))
        }
      </Marquee>
    </div>
  )
}

export default ClientMarquee