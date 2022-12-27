import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { Circle } from 'src/components'
import { device } from 'src/utils'

import mainImage from '../../../public/images/blog/main.png'
import smallImage from '../../../public/images/blog/main-small.png'
import { ArticleInfo } from './article-info'

export const Article = () => {
  return (
    <Wrapper>
      <WrapImage>
        <MainImage src={mainImage} alt="image slider" priority />
        <SmallImage src={smallImage} alt="image slider" priority />
        <WrapTitle>
          <WrapSubtitle>
            <Subtitle>home</Subtitle>
            <CustomCircle />
            <Subtitle>blog</Subtitle>
            <CustomCircle />
            <WeightSubtitle>
              HOW TO START IN STAGING BUSINESS IN 7 SIMPLE STEPS
            </WeightSubtitle>
          </WrapSubtitle>

          <Title>HOW TO START IN STAGING BUSINESS IN 7 SIMPLE STEPS</Title>
        </WrapTitle>
      </WrapImage>
      <ArticleInfo />
    </Wrapper>
  )
}

const Wrapper = styled.div``

const WrapImage = styled.div`
  position: relative;
`

const MainImage = styled(Image)`
  width: 100%;
  height: auto;
  @media ${device.tablet} {
    display: none;
  }
`

const SmallImage = styled(Image)`
  display: none;
  @media ${device.tablet} {
    display: block;
    width: 100%;
    height: auto;
  }
`

const WrapTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  max-width: 1342px;
  width: 100%;
  padding: 0 15px;
`

const WrapSubtitle = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`

const Subtitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  text-align: center;
  @media ${device.laptopL} {
    font-size: 12px;
  }
  @media ${device.mobileXS} {
    font-size: 10px;
  }
`

const WeightSubtitle = styled(Subtitle)`
  font-weight: 600;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 70px;
  line-height: 130%;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.white};
  @media ${device.laptopXS} {
    font-size: 50px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.mobileXS} {
    font-size: 20px;
  }
`

const CustomCircle = styled((props) => <Circle {...props} />)`
  background: ${({ theme }) => theme.white};
  width: 4px;
  height: 4px;
`
