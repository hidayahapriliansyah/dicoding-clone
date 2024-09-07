import Image from 'next/image'
import React from 'react'
import LearningPathOptions from './LearningPathOptions'
import { LoadingImage } from './LoadingImage'
import { clients } from '../data/clients'
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'

const LearningPath = () => {
  const imgPlaceholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAALCAYAAAANxs/1AAAHKElEQVR4AQChAF7/AP////////////////////////////////////////////////////////////////////////////////////////////////////////7////9/////f////3////+//////////////////////////////////////////////////////////////////////////////////////8AoQBe/wD////////////////////////////////////////////////////////////////////////9///9+////Pr//vr4//359//8+Pb/+/f1//r29P/69vT/+/f1//z49v/9+ff///v5///+/P////7/////////////////////////////////////////////////////////////////AKEAXv8A//////////////////////////////////////////////7///78///7+f/9+ff/+vb0//fz8f/08O7/8u7s//Ds6v/u6uj/7enn/+zo5v/r5+X/7Ojm/+zo5v/u6uj/8Ozq//Pv7f/28vD/+vb0//76+P///fv////+//////////////////////////////////////////7////+/wChAF7/AP///f////3////9/////f///vz///37///8+v/++vj/+/f1//j08v/18e//8e3r/+3p5//p5eP/5uLg/+Pf3f/g3Nr/3trY/9zY1v/b19X/29fV/9vX1f/d2df/39vZ/+Le3P/m4uD/6ubk/+/r6f/08O7/+PTy//z49v//+/n///78/////f////7////+/////f////3///78///+/P8AoQBe/wD//Pr///z6///8+v//+/n///v4//359//79/X/+PTy//Xx7//x7ev/7enn/+jk4v/j393/39vZ/9rW1P/X09H/08/N/9HNy//Py8n/zsrI/87KyP/Py8n/0c3L/9PPzf/X09H/3NjW/+Hd2//m4uD/7Ojm//Ht6//28vD/+vb0//76+P///Pr///37///9+////fv///37///8+v///Pr/AKEAXv8A//v5///7+f//+/n//vr4//359//79/X/+fXz//by8P/y7uz/7uro/+nl4//k4N7/39vZ/9rW1P/W0tD/0s7L/87KyP/Lx8X/ysXD/8nEwv/JxcL/ysbE/8zIxv/Py8n/08/N/9jU0v/d2df/49/d/+nl4//v6+n/9PDu//n18//8+Pb///v5///8+v///Pr///z6///8+v///Pr///v5/wChAF7/AP/8+v///Pr///v5///7+f/++vj//fn3//v29P/49PL/9PDu//Ds6v/s6Ob/5+Ph/+Le3P/d2df/2dXT/9XRz//Rzcv/z8vJ/83Jx//MyMb/zMjG/83Jx//Py8n/08/M/9fT0f/c19X/4d3b/+fj4f/t6ef/8u7s//fz8f/79/X//vr4///8+v///fv///37///9+////Pr///z6///7+f8AoQBe/wD//vz///78///+/P///vz///37///8+v//+/n//fn3//r29P/38/H/8+/t/+/r6f/r5+T/5uLg/+Le3P/f29n/3NjW/9rW1P/Y1NL/19PR/9fT0f/Z1dL/29bU/93Z1//h3dv/5uLg/+vn5f/w7Or/9fHv//r29P/++vj///37/////f////7//////////v////3///78///9+////fv/AKEAXv8A/////////////////////////////////////////v///vz///z6//359//69fP/9vLw//Pv7f/w7On/7enn/+rm5P/o5OL/5+Ph/+fi4P/n4+H/6OTi/+nl4//s6Ob/7+vp//Pv7f/38/H/+/f1///8+v////3//////////////////////////////////////////v////3///78/wChAF7/AP/////////////////////////////////////////////////////////////9///9+//++vj//Pj2//n18//48/H/9vLw//Xx7//18e//9fHv//by8P/38/H/+fXz//z49v//+/n////8/////////////////////////////////////////////////////////////////////v8BoQBe/wD//////////////////////////////////////////////////////////////////////////////f///fv///v5//76+P/9+ff//fn3//359//++vj///v5///9+/////3/////////////////////////////////////////////////////////////////////////////////uJyfSTgHO/MAAAAASUVORK5CYII='

  return (
    <section id='learning-path' className='scroll-mt-[76px] text-primary-text w-full'>
      <div className='w-full container'>
        <div className='w-full pt-[48px]'>
          <h2 className='mb-4 font-extrabold text-center text-2xl lg:text-[2rem]'>Learning Path</h2>
          <p className='mx-auto w-full sm:max-w-[510px] md:max-w-[450px] lg:max-w-[540px] font-[500] text-center'>Learning path akan membantu Anda dalam belajar di Academy dengan kurikulum yang dibangun bersama pelaku industri ternama.</p>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-2 py-12'>
          <LoadingImage
            src={'/images/academy-googleatp-3.png'}
            placeholder={imgPlaceholder}
            alt='Image'
            width={204}
            height={40}
            className='object-contain lg:mr-8 w-auto lg:w-[242px] h-auto'
          />
          <LoadingImage
            src={'/images/google-cloud-partner.png'}
            placeholder={imgPlaceholder}
            alt='Image'
            width={164}
            height={50}
            className='object-contain w-auto lg:w-[198px] h-auto'
          />
          <LoadingImage
            src={'/images/google-for-education-partner.jpg'}
            placeholder={imgPlaceholder}
            alt='Image'
            width={180}
            height={50}
            className='object-contain w-auto lg:w-[213px] h-auto'
          />
        </div>

        <div className='flex flex-wrap justify-center items-center gap-6 mb-8 w-full'>
          <div
            className='flex items-center w-full max-w-[160px] md:max-w-[180px] h-[50px] py-2 border border-gray-300 rounded-sm'
          >
            <LoadingImage
              alt={'Google'}
              src={`/images/clients/homepage-partner-google.png`}
              placeholder={clients[0].imgPlaceholder as PlaceholderValue}
              width={180}
              height={50}
              className='object-contain p-8 w-auto h-auto'
            />
          </div>
          <div
            className='flex items-center w-full max-w-[160px] md:max-w-[180px] h-[50px] py-2 border border-gray-300 rounded-sm'
          >
            <LoadingImage
              alt={'Google'}
              src={`/images/clients/homepage-partner-microsoft.png`}
              placeholder={clients[0].imgPlaceholder as PlaceholderValue}
              width={180}
              height={50}
              className='object-contain p-8 w-auto h-auto'
            />
          </div>
          <div
            className='flex items-center w-full max-w-[160px] md:max-w-[180px] h-[50px] py-2 border border-gray-300 rounded-sm'
          >
            <LoadingImage
              alt={'Google'}
              src={`/images/clients/homepage-partner-aws.png`}
              placeholder={clients[0].imgPlaceholder as PlaceholderValue}
              width={180}
              height={50}
              className='object-contain p-8 w-auto h-auto'
            />
          </div>
          <div
            className='flex items-center w-full max-w-[160px] md:max-w-[180px] h-[50px] py-2 border border-gray-300 rounded-sm'
          >
            <LoadingImage
              alt={'Google'}
              src={`/images/clients/homepage-partner-ibm.png`}
              placeholder={clients[0].imgPlaceholder as PlaceholderValue}
              width={180}
              height={50}
              className='object-contain p-8 w-auto h-auto'
            />
          </div>
          <div
            className='flex items-center w-full max-w-[160px] md:max-w-[180px] h-[50px] py-2 border border-gray-300 rounded-sm'
          >
            <LoadingImage
              alt={'Google'}
              src={`/images/clients/homepage-partner-line.png`}
              placeholder={clients[0].imgPlaceholder as PlaceholderValue}
              width={180}
              height={50}
              className='object-contain p-8 w-auto h-auto'
            />
          </div>
        </div>

        <LearningPathOptions />
      </div>
    </section>
  )
}

export default LearningPath