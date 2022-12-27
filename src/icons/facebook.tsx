import React from 'react'
import { SVGProps } from 'react'
import { useTheme } from 'styled-components'

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => {
  const { grey, white } = useTheme()

  return (
    <svg
      width={14}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#a)">
        <path
          d="M2.08 11.04H.1c-.32 0-.42-.12-.42-.42V8.2c0-.32.12-.42.42-.42h1.98V6.02c0-.8.14-1.56.54-2.26.42-.72 1.02-1.2 1.78-1.48.5-.18 1-.26 1.54-.26H7.9c.28 0 .4.12.4.4V4.7c0 .28-.12.4-.4.4-.54 0-1.08 0-1.62.02-.54 0-.82.26-.82.82-.02.6 0 1.18 0 1.8h2.32c.32 0 .44.12.44.44v2.42c0 .32-.1.42-.44.42H5.46v6.52c0 .34-.1.46-.46.46H2.5c-.3 0-.42-.12-.42-.42v-6.54Z"
          fill={grey}
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={white} d="M0 0h14v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
