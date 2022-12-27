import React from 'react'
import styled from 'styled-components'

export const Separator = ({ ...props }) => {
  return (
    <Wrapper>
      <Line />
      <Circle {...props} />
      <Line />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
  margin: 30px 0 60px 0;
`

const Line = styled.div`
  border: ${({ theme }) => theme.extra_light_grey} 1px solid;
  width: 330px;
`

const Circle = styled.div`
  border: ${({ theme }) => theme.dim_red} 1px solid;
  background-color: ${({ theme }) => theme.dim_red};
  width: 6px;
  height: 6px;
  border-radius: 50%;
`
