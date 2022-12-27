import React, { useState } from 'react'
import Image from 'next/image'
import styled, { useTheme } from 'styled-components'

import { Container, dataExperience, Separator, Title } from 'src/components'
import { ArrowIcon } from 'src/icons'
import { device } from 'src/utils'

import experience from '../../../public/images/experience.png'
import { dataImages } from './types'

export const Experience = () => {
  const [data, setData] = useState(dataExperience)
  const { black, white } = useTheme()
  const [isShown, setIsShown] = useState(false)

  const activeHandler = (id: number) => {
    setData((prev) => {
      const newState = prev.map((el) => {
        if (el.id === id) {
          return { ...el, active: true }
        } else {
          return { ...el, active: false }
        }
      })

      return newState
    })
  }

  return (
    <>
      <Container>
        <Title color={black}>Our Work Shows Our Expertise in This Field</Title>
        <Separator />
        <WrapeprButtons>
          {data?.map((el) => (
            <Button
              onClick={() => activeHandler(el.id)}
              key={el.id}
              active={el.active}>
              {el.title}
            </Button>
          ))}
        </WrapeprButtons>
      </Container>

      <ImageExperience src={experience} alt="experience" />
      <Container>
        {dataImages?.map((el) => (
          <SmallResizeImage key={el.id} src={el.image} alt="image" />
        ))}
      </Container>
      <Container>
        <ButtonProjects
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          <TextButton>View our projects</TextButton>
          <ArrowIcon fill={isShown ? white : ''} />
        </ButtonProjects>
      </Container>
    </>
  )
}

const ImageExperience = styled(Image)`
  width: 100%;
  height: auto;
  @media ${device.tablet} {
    display: none;
  }
`

const SmallResizeImage = styled(Image)`
  display: none;
  @media ${device.tablet} {
    width: 100%;
    height: auto;
    display: inline-block;
    margin: 10px 0;
  }
`

const WrapeprButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
  @media ${device.laptopL} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`

interface StyledButton {
  active: boolean
}

const Button = styled.button<StyledButton>`
  background: ${({ active, theme }) =>
    active ? theme.extra_red : theme.btn_disabled};
  border-radius: 5px;
  padding: 19px 68px;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  color: ${({ theme, active }) => (active ? theme.white : theme.black)};
  border: none;
  transition: 0.4s ease all;
  cursor: pointer;
  @media ${device.laptopL} {
    padding: 19px 0;
  }
`

const TextButton = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.extra_red};
  transition: 0.4s ease all;
`

const ButtonProjects = styled.button`
  margin: 35px auto 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 19px 30px;
  gap: 10px;
  width: 284px;
  height: 55px;
  border: 2px solid #de2a2a;
  border-radius: 5px;
  background: ${({ theme }) => theme.white};
  cursor: pointer;
  transition: 0.4s ease all;
  &:hover {
    background: ${({ theme }) => theme.extra_red};
  }
  &:hover ${TextButton} {
    color: ${({ theme }) => theme.white};
  }
`
