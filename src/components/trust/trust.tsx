import React from 'react'
import Image from 'next/image'
import styled, { useTheme } from 'styled-components'

import { Container, Separator } from 'src/components'
import { device } from 'src/utils'

import { dataTrust } from './types'

export const Trust = () => {
  const { white } = useTheme()

  return (
    <Container>
      <Wrapper>
        <Title>
          Why do Home Builders, Realtors and Investors Trust TNT Staging?
        </Title>
        <Separator style={{ background: white }} />
        <Content>
          {dataTrust?.map((el) => (
            <Item key={el.id}>
              <ItemImage src={el.image} alt={el.title} />
              <ItemTitle>{el.title}</ItemTitle>
              <ItemDesc>{el.desc}</ItemDesc>
            </Item>
          ))}
        </Content>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.grey};
  padding: 42px 60px 58px;
  margin-bottom: 110px;
  @media ${device.tablet} {
    padding: 42px 20px 58px;
  }
`

const Title = styled.h3`
  font-weight: 700;
  font-size: 45px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  @media ${device.mobileXS} {
    font-size: 35px;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24%, 1fr));
  grid-gap: 20px;
  @media ${device.laptopS} {
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    grid-gap: 40px;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ItemImage = styled(Image)`
  width: 100%;
  height: auto;
`

const ItemTitle = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  margin: 25px 0 10px;
`

const ItemDesc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({ theme }) => theme.white};
  max-width: 405px;
  @media ${device.laptop} {
    max-width: initial;
  }
`
