import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { Circle } from 'src/components'
import { device } from 'src/utils'

import mainImage from '../../../public/images/blog/main.png'
import smallImage from '../../../public/images/blog/main-small.png'
import { ArticleBlog } from './article-blog'

export const Blog = () => {
  return (
    <Wrapper>
      <WrapImage>
        <MainImage src={mainImage} alt="image slider" priority />
        <SmallImage src={smallImage} alt="image slider" priority />
        <WrapTitle>
          <WrapSubtitle>
            <Subtitle>home</Subtitle>
            <CustomCircle />
            <WeightSubtitle>blog</WeightSubtitle>
          </WrapSubtitle>
          <Title>Blog</Title>
        </WrapTitle>
      </WrapImage>
      <ArticleBlog />
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
  @media ${device.mobileXS} {
    font-size: 14px;
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
  color: ${({ theme }) => theme.white};
  @media ${device.mobileXS} {
    font-size: 40px;
  }
`

const CustomCircle = styled((props) => <Circle {...props} />)`
  background: ${({ theme }) => theme.white};
  width: 4px;
  height: 4px;
`
