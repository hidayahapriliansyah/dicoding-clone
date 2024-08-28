import Image from 'next/image'
import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='lg:px-12'>
      <div className='flex flex-col md:flex-row w-full md:max-w-[720px] lg:max-w-[1140px] border-y border-y-input md:mx-auto'>
        <div className='w-full md:w-max bg-gray-100 md:bg-opacity-0'>
          <div className='py-12 px-4 md:px-0 mx-auto w-full max-w-[540px]'>
            {/* dicoding logo, alamat, logo social media, penghargaan */}
            <Image
              alt='Dicoding Logo'
              src={'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/certificate_logo.png'}
              width={130}
              height={80}
            />
            <p className='my-5 font-thin'>
              Dicoding Space
              <br />
              Jl. Batik Kumeli No.50, Sukaluyu,
              <br />
              Kec. Cibeunying Kaler, Kota Bandung
              <br />
              Jawa Barat 40123
            </p>
            <dl className='text-primary-text text-xl'>
              <dd className='flex items-center gap-8'>
                <a href="#">
                  <AiFillInstagram />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaFacebookF />
                </a>
              </dd>
            </dl>

            <p className='mt-12 text-primary-text'>
              <b>Penghargaan</b>
              <Image
                alt='Penghargaan'
                src={'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/aba-2019-2.png'}
                width={63}
                height={70}
                className='mt-4 mr-4'
              />
            </p>
          </div>
        </div>
        <div className='flex flex-wrap md:flex-nowrap md:gap-8 py-12 px-4 mx-auto w-full max-w-[540px] md:max-w-[480px] lg:max-w-[760px]'>
          <div className='w-full mb-4 md:ml-8'>
            <dl>
              <p className='font-bold mb-4 md:text-2xl md:leading-relaxed'>
                Decode Ideas
                <br />
                Discover Potential
              </p>
              <dd className='mb-2'>
                <a href="#" className='text-[.9rem] md:text-base hover:underline'>
                  <h6>Tentang Kami</h6>
                </a>
              </dd>
            </dl>
          </div>
          <div className='text-sm md:text-[.9rem] w-[50%] md:max-w-full text-primary-text'>
            <dl className='flex flex-col gap-3 my-4'>
              <dd>
                <a href="#">Blog</a>
              </dd>
              <dd>
                <a href="#">Reward</a>
              </dd>
              <dd>
                <a href="#">Showcase</a>
              </dd>
              <dd>
                <a href="#">Dicoding Elite</a>
              </dd>
            </dl>
          </div>
          <div className='text-sm md:text-[.9rem] w-[50%]  md:max-w-full'>
            <dl className='flex flex-col gap-3 my-4 text-primary-text'>
              <dd>
                <a href="#">Hubungi Kami</a>
              </dd>
              <dd>
                <a href="#">FAQ</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className='lg:flex lg:justify-between lg:items-start mx-auto w-full max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] text-[.85rem] font-light py-6 px-[15px]'>
        <div className='text-center mb-4'>
          © 2024 Dicoding
          <span className='mx-2'>|</span>
          Dicoding adalah merek milik PT Presentologics, perusahaan induk dari PT Dicoding Akademi Indonesia.
        </div>
        <div className='flex justify-center items-center'>
          <a href="#">Terms</a>
          <span className='mx-2'>•</span>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer