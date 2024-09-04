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
import { LoadingImage } from './LoadingImage'


const ReviewerAction = () => {
  return (
    <section className='w-full'>
      <Dialog>
        <DialogTrigger asChild>
          <div className='relative mx-auto w-full max-w-[690px] lg:max-w-[930px] md:h-[480px] xl:max-w-[1110px] hover:cursor-pointer hover:scale-[101%] transition-all duration-200 rounded-[4px] overflow-hidden'>
            <LoadingImage
              src={'/images/homepage-video-thumbnail-mobile.png'}
              alt='Reviewer Action'
              width={690}
              height={300}
              className='lg:hidden'
              placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHCAYAAAABIM1CAAAB8ElEQVR4AQBBAL7/AFVabf9qcIH/houb/5meq/+doqz/mZ2l/4+Tmf9+goj/aGxz/1dbY/9UWGT/XWFx/15jdv9FSmD/Fxw2/wAAEv8AQQC+/wBdXW3/cnOC/46Pm/+hoav/p6at/6WkqP+fnqH/lZSW/4eFiP99fIH/goGJ/5GQnP+XlqX/gICS/1RTaf8vL0b/AEEAvv8AYl5r/3dzfv+Sjpf/pJ+m/6ulqf+rpqb/rKal/6qkov+noJ//qaKj/7mytv/RytH/3Nbg/8jC0P+dlqb/eHKD/wBBAL7/AFhVYf9saHP/hYGJ/5SQlf+Yk5b/mpSU/56Ylf+jnJn/qKGe/7StrP/Nxsf/6+Po//nx+f/k3ej/t7C9/5GKmf8AQQC+/wA8QU//TVJf/2Jmcf9tcHn/bHB1/2ttb/9ucG//dXZ1/35+ff+Ojo7/qqms/8jIzv/U09z/vLvH/4qJmP9hYXH/AEEAvv8AFyg8/yY3Sv83SFj/PExa/zdGUP8wPkX/Lz1B/zRBRP88SEv/TFdc/2Zxd/+BjJX/h5Kf/2lzg/8yPE//BhEk/wFBAL7/AAAYL/8LJTz/GTNH/xs0Rf8SKjj/Bx4p/wMZIv8FGyH/CyAn/xktNf8xRE7/SFto/0tdbv8oO07/AAAV/wAAAP+0mgm5s68WOQAAAABJRU5ErkJggg=='
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
            <LoadingImage
              src={'/images/homepage-video-thumbnail.png'}
              alt='Reviewer Action'
              fill
              className='absolute object-cover hidden lg:block'
              placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHCAYAAAABIM1CAAAB8ElEQVR4AQBBAL7/AAABI/8ABCX/AAYm/wADIv8AAB3/AAIe/wQNJv8SGjL/GyI5/xwjOP8bIDT/HCA0/yQnOv8vMEP/ODlL/z09UP8AQQC+/wAICir/Cw0t/w0PLv8LDSr/Bwol/woNJv8VGC//JSc9/zEzR/84OUv/PDxN/0RCU/9RT1//YV1t/21pef9zb3//AEEAvv8AGxYz/x4ZNv8hHDf/Hxo0/xsXL/8dGjD/KSY6/zs4Sv9LSFj/WFNi/2NebP9zbXr/iIGN/56Vof+upbH/t625/wBBAL7/ACIaNv8mHzr/KiM8/ygiOv8kHzX/JiE1/zEsPv9CPk3/U09c/2Jdaf9xbHb/hoCJ/56XoP+3r7f/ycHJ/9LK0f8AQQC+/wAXFTD/HBo1/yEgOf8gIDj/HB0z/xweMf8jJjb/MTRC/z9CTv9LTlj/WFtj/2psdP+Bgon/l5ie/6iorf+wr7X/AEEAvv8AAQkl/wcQK/8NFzH/Dhgx/wkVK/8HEyf/Chcp/xIgL/8bKTX/IS85/yg2P/8zQUn/RFFY/1ViaP9hbXP/Z3N4/wFBAL7/AAAAHf8AByT/AA8q/wARK/8ADSX/AAof/wAMHv8AESH/ABUj/wAXIv8CGCL/CB8n/xQqMf8gNjz/KT5E/y1CSP9mib77Yc9ewgAAAABJRU5ErkJggg=='
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