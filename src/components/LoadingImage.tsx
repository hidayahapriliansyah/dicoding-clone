'use client';

/* eslint-disable jsx-a11y/alt-text */

import Image from 'next/image'
import { useReducer } from 'react'

/**
 * This component is a drop-in replacement for next/image that shows a placeholder image while the image is loading.
 * 
 * *GitHub Issue: Placeholder of next/image is still visible after the image is loaded*\
 * https://github.com/vercel/next.js/issues/53329
 */

//@ts-ignore
export const LoadingImage: React.FC<LoadingImageProps> = ({ placeholder, ...props }) => {
  //@ts-ignore
  const [isLoading, stopLoading] = useReducer((_, ev) => (props.onLoad?.(ev), false), true)

  // prettier-ignore
  return (
    <>
      {isLoading && placeholder &&
        <Image
          {...props}
          placeholder={undefined}
          src={placeholder}
        />
      }
      <Image
        {...props}
        className={`${props.className} ${isLoading && 'absolute invisible'}`}
        placeholder={undefined}
        onLoad={stopLoading}
      />
    </>
  )
}

export type NextImageProps = Parameters<typeof Image>[0]

export interface LoadingImageProps extends NextImageProps {
  placeholder: NextImageProps['placeholder']
}