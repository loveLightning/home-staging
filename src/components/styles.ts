import styled from 'styled-components'

import { device } from 'src/utils'

export const Container = styled.div`
  padding: 0 60px;
  max-width: 1920px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 30px;
  }

  @media screen and (max-width: 575px) {
    max-width: 100%;
    padding: 0 15px;
  }
`

interface StyledTitle {
  color?: string
}

export const Title = styled.h3<StyledTitle>`
  font-weight: 700;
  font-size: 45px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme, color }) => (color ? color : theme.white)};
  @media ${device.mobileXS} {
    font-size: 30px;
  }
`

export const Line = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.line_color};
  width: 100%;
`

export const Field = styled.div`
  position: relative;
`

export const Input = styled.input`
  padding: 17px 30px;
  height: 55px;
  background: ${({ theme }) => theme.btn_disabled};
  border: 1px solid ${({ theme }) => theme.boder_color};
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${({ theme }) => theme.grey};
  outline: none;
  transition: 0.4s ease all;
  &:focus {
    border: ${({ theme }) => theme.grey} 1px solid;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${({ theme }) => theme.grey};
  }
`

export const Textarea = styled.textarea`
  resize: none;
  padding: 17px 30px;
  height: 120px;
  background: ${({ theme }) => theme.btn_disabled};
  border: 1px solid ${({ theme }) => theme.boder_color};
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${({ theme }) => theme.grey};
  outline: none;
  transition: 0.4s ease all;
  &:focus {
    border: ${({ theme }) => theme.grey} 1px solid;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${({ theme }) => theme.grey};
  }
`

export const Button = styled.button`
  padding: 19px 30px;
  width: 284px;
  height: 55px;
  background: ${({ theme }) => theme.extra_red};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
`

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.extra_red};
  font-size: 14px;
  position: absolute;
`

export const Circle = styled.div`
  border: 1px solid ${({ theme }) => theme.white};
  width: 7px;
  height: 7px;
  border-radius: 50%;
`
