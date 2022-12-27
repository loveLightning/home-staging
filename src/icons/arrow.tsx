import React from 'react'
import { useTheme } from 'styled-components'

interface Props {
  fill?: string
}

export const ArrowIcon = ({ fill }: Props) => {
  const { extra_red } = useTheme()

  return (
    <svg width={25} height={25} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.101 13.544H20.4l-3.428 3.428c-.985.985.492 2.462 1.477 1.477l3.122-3.127 2.084-2.087a1.042 1.042 0 0 0 0-1.47l-5.206-5.212a1.041 1.041 0 0 0-.755-.315c-.938 0-1.398 1.142-.722 1.792l3.436 3.429H2.048C.603 11.53.71 13.616 2.1 13.544Z"
        fill={fill ? fill : extra_red}
      />
    </svg>
  )
}
