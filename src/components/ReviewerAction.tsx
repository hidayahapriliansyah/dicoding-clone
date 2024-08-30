import Image from 'next/image'
import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CirclePlay, SquareCode } from 'lucide-react'


const ReviewerAction = () => {
  return (
    <section className='w-full'>
      <Dialog>
        <DialogTrigger asChild>
          <div className='relative mx-auto w-full max-w-[690px] lg:max-w-[930px] md:h-[480px] xl:max-w-[1110px] hover:cursor-pointer hover:scale-[101%] transition-all duration-200 rounded-[4px] overflow-hidden'>
            <Image
              src={'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-video-thumbnail-mobile.png'}
              alt='Reviewer Action'
              width={690}
              height={300}
              className='lg:hidden'
            />
            <div className='absolute z-20 hidden lg:block w-[42%] text-white top-0 left-0 p-10'>
              <SquareCode className='w-12 h-12 mb-6' />
              <h2 className='mb-6 text-2xl font-bold leading-tight'>Kenal lebih dekat dengan kami!</h2>
              <p className='mb-12 font-medium'>Sebagai <i>platform</i> edukasi teknologi, pengembangan <i>skill</i> para developer adalah fokus Dicoding. Untuk mencapainya, tersedia berbagai kelas <i>online</i>, program pelatihan, dan sertifikasi pemrograman dengan kualitas yang terjamin serta 2 layanan utama: Code Review & Forum Diskusi.</p>
              <div className='flex items-center gap-2 font-bold'>
                <CirclePlay />
                Tonton video
              </div>
            </div>
            <Image
              src={'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-video-thumbnail.png'}
              alt='Reviewer Action'
              fill
              className='absolute object-cover hidden lg:block'
            />
          </div>
        </DialogTrigger>
        <DialogContent className="w-full max-w-[800px] h-auto p-0 border-black rounded-md overflow-hidden">
          <DialogTitle className='hidden'>Kenal lebih dekat kami</DialogTitle>
          <video
            src='/videos/profile.mp4'
            controls
            autoPlay
            className="w-full h-auto"
          >
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default ReviewerAction