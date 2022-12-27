import 'swiper/css'
import 'swiper/css/pagination'

import React from 'react'
import Image from 'next/image'
import styled, { useTheme } from 'styled-components'
import { Pagination } from 'swiper'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import { Container } from 'src/components'
import { ArrowIcon } from 'src/icons'
import { device } from 'src/utils'

import nextImage from '../../../public/images/slider-next.svg'
import prevImage from '../../../public/images/slider-prev.svg'
import { mainSliderData } from './types'

export const MainSlider = () => {
  const swiperRef = React.useRef<SwiperRef>(null)

  const { white } = useTheme()

  return (
    <>
      <SwiperComponent
        ref={swiperRef}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}>
        {mainSliderData?.map((el) => (
          <SwiperSlide key={el.id}>
            <Slide>
              <ImageSlide src={el.image} alt="image slide" priority />
              <ImageSmall src={el.imageSmall} alt="image slide" priority />
              <Container>
                <Content>
                  <Description desktop>{el.desc}</Description>
                  <Description desktop={false}>{el.additDesc}</Description>
                  <Title>{el.title}</Title>
                  <WrapInfo>
                    <Info>More information</Info>
                    <ArrowIcon fill={white} />
                  </WrapInfo>
                </Content>
                <ContentArrow>
                  <PageNumber>
                    <ActiveSLide>{el.pageNumber}/</ActiveSLide>
                    <TotalSlides>0{mainSliderData?.length}</TotalSlides>
                  </PageNumber>
                  <Arrows>
                    <div onClick={() => swiperRef?.current?.swiper.slidePrev()}>
                      <Prev src={prevImage} alt="prev" priority />
                    </div>
                    <div onClick={() => swiperRef?.current?.swiper.slideNext()}>
                      <Next src={nextImage} alt="prev" priority />
                    </div>
                  </Arrows>
                </ContentArrow>
              </Container>
            </Slide>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </>
  )
}
const SwiperComponent = styled(Swiper)`
  margin-bottom: 110px;
  @media ${device.mobileXS} {
    margin-bottom: 50px;
  }
`

const ImageSlide = styled(Image)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  @media ${device.tablet} {
    display: none !important;
  }
`

const ImageSmall = styled(Image)`
  display: none !important;
  @media ${device.tablet} {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: block !important;
  }
`

const Slide = styled.div`
  position: relative;
  width: 100%;
`

const Content = styled.div`
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.white};
  bottom: 71px;
  left: 5.4%;
  @media ${device.laptop} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`

const ContentArrow = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  position: absolute;
  right: 5.4%;
  bottom: 71px;
  @media ${device.laptop} {
    display: none;
  }
`

interface StyledDesc {
  desktop: boolean
}

const Description = styled.p<StyledDesc>`
  display: ${({ desktop }) => (desktop ? 'block' : 'none')};
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  text-transform: uppercase;
  @media ${device.laptop} {
    display: ${({ desktop }) => (!desktop ? 'block' : 'none')};
    text-align: center;
  }
  @media ${device.mobileXS} {
    font-size: 12px;
  }
`

const Title = styled.h1`
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  font-size: 70px;
  line-height: 130%;
  text-transform: uppercase;
  margin-top: 10px;
  @media ${device.laptop} {
    font-size: 50px;
    text-align: center;
  }
  @media ${device.mobileXS} {
    font-size: 38px;
  }
`

const WrapInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  cursor: pointer;
  @media ${device.laptop} {
    justify-content: center;
  }
`

const Info = styled.p`
  color: ${({ theme }) => theme.white};
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  text-transform: uppercase;
  @media ${device.mobileXS} {
    font-size: 12px;
  }
`

const Prev = styled(Image)`
  cursor: pointer;
  width: 50px !important;
  height: 50px !important;
`

const Next = styled(Prev)``

const Arrows = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const PageNumber = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
`

const ActiveSLide = styled.span`
  color: ${({ theme }) => theme.white};
`

const TotalSlides = styled.span`
  color: ${({ theme }) => theme.light_grey};
`
