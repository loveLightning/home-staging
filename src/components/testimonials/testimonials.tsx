import 'swiper/css'

import React from 'react'
import Image from 'next/image'
import styled, { useTheme } from 'styled-components'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import { Container, Separator, Title } from 'src/components'
import { device } from 'src/utils'

import nextImage from '../../../public/images/slider-next.svg'
import prevImage from '../../../public/images/slider-prev.svg'
import { sliderData } from './types'

export const Testimonials = () => {
  const swiperRef = React.useRef<SwiperRef>(null)
  const { white } = useTheme()

  return (
    <Container>
      <Wrapper>
        <Title>Testimonials</Title>
        <Separator style={{ background: white, border: '1px solid white' }} />
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            1200: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}>
          {sliderData?.map((el) => (
            <div key={el.id}>
              <MySwiperSlide remove="true">
                <ImageSilder src={el.firstImage} alt="image" />
              </MySwiperSlide>
              <MySwiperSlide>
                <ImageReview src={el.secondImage} alt="image" />
              </MySwiperSlide>
            </div>
          ))}
        </Swiper>

        <Arrows>
          <div onClick={() => swiperRef?.current?.swiper.slidePrev()}>
            <Prev src={prevImage} alt="prev" priority />
          </div>
          <div onClick={() => swiperRef?.current?.swiper.slideNext()}>
            <Next src={nextImage} alt="prev" priority />
          </div>
        </Arrows>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.grey};
  padding: 42px 60px 62px;
  @media ${device.tablet} {
    padding: 20px;
  }
`

const Arrows = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-top: 30px;
`

const Prev = styled(Image)`
  cursor: pointer;
`

const Next = styled(Prev)``

const ImageReview = styled(Image)`
  width: 100%;
  height: auto;
`

const ImageSilder = styled(ImageReview)``

const MySwiperSlide = styled((props) => <SwiperSlide {...props} />)`
  @media ${device.laptopS} {
    display: ${({ remove }) => (remove ? 'none' : '')};
  }
`
