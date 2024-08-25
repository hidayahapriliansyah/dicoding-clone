import Image from 'next/image'
import React from 'react'
import { clients } from '../data/clients'
import ClientMarquee from './ClientMarquee'

const Clients = () => {
  return (
    <section className='w-full pt-[64px] pb-[48px] max-w-[1440px] mx-auto'>
      <h4 className='text-[1.5rem] text-primary-text text-center mb-2'>Telah dipercaya oleh</h4>
      <ClientMarquee />
      <div className='hidden lg:grid grid-cols-6 gap-6 mt-8 w-full px-4'>
        {
          clients.map((client, i) => (
            <div
              key={i}
              className='flex items-center h-[64px] py-2 border border-gray-300 rounded-sm'
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
      </div>
    </section>
  )
}

export default Clients