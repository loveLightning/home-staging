import 'swiper/css'

import React from 'react'
import Image from 'next/image'
import styled, { useTheme } from 'styled-components'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import { Container, Separator, Title } from 'src/components'
import { device } from 'src/utils'

import nextImage from '../../../public/images/slider-next.svg'
import prevImage from '../../../public/images/slider-prev.svg'
import image from '../../../public/images/testimonials/testimonials.png'

export const Testimonials = () => {
  const swiperRef = React.useRef<SwiperRef>(null)
  const { white } = useTheme()

  return (
    <Container>
      <Wrapper>
        <Title>Testimonials</Title>
        <Separator style={{ background: white, border: '1px solid white' }} />
        <Swiper
          centerInsufficientSlides={true}
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            1440: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}>
          <MySwiperSlide remove="true">
            <ImageSilder src={image} alt="image" />
          </MySwiperSlide>
          <MySwiperSlide>
            <Review>
              <ReviewDesc>
                I just wanted to send you an email to thank you for your hard
                work. You and your team did a fabulous job today!!! It is
                beautiful, and really brought the house to the next level. I
                love the long drapes in the master. They really show off the
                high vaulted ceiling, and make it a show stopper. The dining
                table is gorgeous and the artwork is amazing. I love how each
                art piece was thought out to compliment the finishes of the
                home, ie. the gold in the art in the dining room mirroring the
                gold in the light fixtures, etc.
                <br /> <br />I knew based on photos of your past work that TNT
                would do a great job, but you went above and beyond. You were
                not the cheapest staging company we received quotes from, but we
                chose you because of your past work, and because of the
                connection we felt with you and for the obvious passion you have
                for your work. I’m glad we did.
                <br /> <br />
                We are so very pleased with how it came out, and i wanted to let
                you know that all of your hard work is noticed and appreciated!!
              </ReviewDesc>
              <ReviewName>Will, Customer</ReviewName>
            </Review>
          </MySwiperSlide>

          <MySwiperSlide remove="true">
            <ImageSilder src={image} alt="image" />
          </MySwiperSlide>
          <MySwiperSlide>
            <Review>
              <ReviewDesc>
                I just wanted to send you an email to thank you for your hard
                work. You and your team did a fabulous job today!!! It is
                beautiful, and really brought the house to the next level. I
                love the long drapes in the master. They really show off the
                high vaulted ceiling, and make it a show stopper. The dining
                table is gorgeous and the artwork is amazing. I love how each
                art piece was thought out to compliment the finishes of the
                home, ie. the gold in the art in the dining room mirroring the
                gold in the light fixtures, etc.
                <br /> <br />I knew based on photos of your past work that TNT
                would do a great job, but you went above and beyond. You were
                not the cheapest staging company we received quotes from, but we
                chose you because of your past work, and because of the
                connection we felt with you and for the obvious passion you have
                for your work. I’m glad we did.
                <br /> <br />
                We are so very pleased with how it came out, and i wanted to let
                you know that all of your hard work is noticed and appreciated!!
              </ReviewDesc>
              <ReviewName>Will, Customer</ReviewName>
            </Review>
          </MySwiperSlide>

          <MySwiperSlide remove="true">
            <ImageSilder src={image} alt="image" />
          </MySwiperSlide>
          <MySwiperSlide>
            <Review>
              <ReviewDesc>
                I just wanted to send you an email to thank you for your hard
                work. You and your team did a fabulous job today!!! It is
                beautiful, and really brought the house to the next level. I
                love the long drapes in the master. They really show off the
                high vaulted ceiling, and make it a show stopper. The dining
                table is gorgeous and the artwork is amazing. I love how each
                art piece was thought out to compliment the finishes of the
                home, ie. the gold in the art in the dining room mirroring the
                gold in the light fixtures, etc.
                <br /> <br />I knew based on photos of your past work that TNT
                would do a great job, but you went above and beyond. You were
                not the cheapest staging company we received quotes from, but we
                chose you because of your past work, and because of the
                connection we felt with you and for the obvious passion you have
                for your work. I’m glad we did.
                <br /> <br />
                We are so very pleased with how it came out, and i wanted to let
                you know that all of your hard work is noticed and appreciated!!
              </ReviewDesc>
              <ReviewName>Will, Customer</ReviewName>
            </Review>
          </MySwiperSlide>
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
    padding: 30px;
  }
  @media ${device.mobileXS} {
    padding: 15px;
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

const Review = styled.div`
  height: 100%;
  padding: 38px 45px;
  overflow: auto;
  @media ${device.laptop} {
    padding: 30px;
  }

  @media ${device.mobileXS} {
    padding: 15px;
  }
`

const ReviewDesc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: ${({ theme }) => theme.black};
  margin-bottom: 10px;
`
const ReviewName = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 130%;
  color: ${({ theme }) => theme.extra_red};
`

const ImageSilder = styled(Image)`
  width: 100%;
  height: auto;
`

const MySwiperSlide = styled((props) => <SwiperSlide {...props} />)`
  @media ${device.laptopL} {
    display: ${({ remove }) => (remove ? 'none' : '')}!important;
  }
`
