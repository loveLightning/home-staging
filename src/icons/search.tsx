import React from 'react'
import { SVGProps } from 'react'
import { useTheme } from 'styled-components'

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  const { grey } = useTheme()

  return (
    <svg
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="m23.209 22.104-5.671-5.671a8.552 8.552 0 0 0 1.993-5.495c0-4.74-3.855-8.594-8.593-8.594-4.74 0-8.594 3.855-8.594 8.594 0 4.738 3.855 8.593 8.594 8.593 2.088 0 4.004-.75 5.495-1.993l5.67 5.67a.779.779 0 0 0 1.106 0 .78.78 0 0 0 0-1.104ZM3.906 10.938a7.04 7.04 0 0 1 7.031-7.032 7.04 7.04 0 0 1 7.032 7.031 7.04 7.04 0 0 1-7.032 7.032 7.04 7.04 0 0 1-7.03-7.032Z"
        fill={grey}
      />
    </svg>
  )
}
