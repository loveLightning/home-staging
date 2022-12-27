import React from 'react'
import { SVGProps } from 'react'
import { useTheme } from 'styled-components'

export const DropdownArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  const { grey } = useTheme()

  return (
    <svg
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M12.5 17.188c-.2 0-.4-.077-.552-.23L4.135 9.147A.78.78 0 1 1 5.24 8.041l7.26 7.26 7.26-7.26a.78.78 0 1 1 1.105 1.105l-7.813 7.813a.779.779 0 0 1-.552.229Z"
        fill={grey}
      />
    </svg>
  )
}
