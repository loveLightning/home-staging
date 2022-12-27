import React from 'react'
import { SVGProps } from 'react'
import { useTheme } from 'styled-components'

export const PlayIcon = (props: SVGProps<SVGSVGElement>) => {
  const { white } = useTheme()

  return (
    <svg
      width={132}
      height={132}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.71 104.193c21.253 0 38.483-17.23 38.483-38.484s-17.23-38.483-38.484-38.483-38.483 17.23-38.483 38.483c0 21.254 17.23 38.484 38.483 38.484Zm6.674-38.484L60.942 72.99V58.428l11.442 7.281Z"
        fill={white}
      />
      <circle opacity={0.3} cx={65.709} cy={65.709} r={65.209} stroke={white} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.709 131.419c36.29-.001 65.709-29.42 65.709-65.71C131.418 29.42 101.999 0 65.709 0v1c35.738 0 64.709 28.972 64.709 64.71 0 35.737-28.971 64.708-64.709 64.709v1Z"
        fill={white}
      />
    </svg>
  )
}
