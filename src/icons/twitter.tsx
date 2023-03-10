import React from 'react'
import { SVGProps } from 'react'
import { useTheme } from 'styled-components'

export const TwitterIcon = (props: SVGProps<SVGSVGElement>) => {
  const { grey, white } = useTheme()

  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#a)">
        <path
          d="M19.912 4.279a.596.596 0 0 0-.56-.282l-.997.087.953-1.922a.597.597 0 0 0-.797-.8l-2.523 1.235c-1.558-.823-3.506-.578-4.846.642-1.118 1.019-1.706 2.586-1.596 4.148-2.923-.293-5.398-1.966-6.86-4.67a.597.597 0 0 0-1.005-.07c-.907 1.225-.97 2.906-.26 4.289a9.043 9.043 0 0 1-.636-.194.596.596 0 0 0-.777.663c.281 1.706 1.277 3.018 2.849 3.794-.205.072-.414.13-.626.174a.596.596 0 0 0-.314.991c1.132 1.21 2.767 1.806 3.929 2.091-1.32 1.035-2.747 1.208-4.818 1.137a.598.598 0 0 0-.462.996c.863.952 4.01 2.026 7.317 2.106.13.003.264.005.4.005 2.323 0 5.392-.498 7.595-2.7 1.668-1.668 2.71-3.588 3.1-5.706.314-1.71.116-3.08.02-3.74l-.02-.144.932-1.503a.596.596 0 0 0 .002-.627Z"
          fill={grey}
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={white} d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
