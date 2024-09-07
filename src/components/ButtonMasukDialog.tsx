'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Input } from './ui/input'
import { FcGoogle } from 'react-icons/fc'

const ButtonMasukDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'outline'}
          size={'lg'}
          className='text-[1rem] font-bold rounded-[2px]'
          aria-label='Login'
        >Masuk</Button>
      </DialogTrigger>
      <DialogContent
        className='block p-0 w-[94%] rounded-lg'
      >
        <DialogHeader
          className='border-b p-4'
        >
          <DialogTitle className='font-semibold text-left text-base'>
            Masuk
          </DialogTitle>
        </DialogHeader>
        <div
          className='p-8'
        >
          <form
            onClick={(e) => {
              e.preventDefault();
            }}
            className='mb-6'
          >
            <div className='relative mb-4 w-auto'>
              <Input
                placeholder='Email'
                className='text-base px-3 py-[6px]'
              />
            </div>
            <div className='relative mb-2 w-auto'>
              <Input
                placeholder='Password'
                className='text-base px-3 py-[6px]'
              />
            </div>
            <div className='mb-3 w-full text-right'>
              <a
                href="https://www.dicoding.com/passwordreset"
                className='text-sm font-bold text-blue-800 hover:underline'
              >Lupas Password?</a>
            </div>
            <Button
              className='w-full text-base font-bold'
            >
              Masuk
            </Button>
          </form>
          <div className='relative w-full mb-4 py-4'>
            <hr />
            <div className='absolute inset-0 flex items-center justify-center'>
              <span className='px-4 bg-white'>atau</span>
            </div>
          </div>
          <div className='mb-6 w-full'>
            <Button
              variant='outline'
              className='relative w-full h-[42px] text-base font-bold border-black text-gray-800'
            >
              <FcGoogle className='absolute left-3 w-7 h-7' />
              Masuk dengan Google
            </Button>
          </div>
          <div className='w-full text-center'>
            Belum punya akun? <a href="#" className='font-bold text-blue-800 hover:underline'>Ayo daftar</a>
          </div>
          <hr className='mt-6 mb-4' />
          <div className='text-center'>
            <small className='font-thin'>
              Dengan melakukan login, Anda setuju dengan{' '}
              <a
                href="https://www.dicoding.com/termsofuse"
                target='_blank'
                className='underline'
              >syarat & ketentuan Dicoding</a>.
            </small>
          </div>
          <div className='text-center mt-1'>
            <small className='font-thin'>
              This site is protected by reCAPTCHA and the Google{' '}
              <a
                href="https://policies.google.com/privacy"
                target='_blank'
                className='underline'
              >Privacy Policy</a>
              {' '}and{' '}
              <a
                href="https://policies.google.com/terms"
                target='_blank'
                className='underline'
              >
                Terms of Service
              </a>
              {' '}apply.
            </small>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ButtonMasukDialog