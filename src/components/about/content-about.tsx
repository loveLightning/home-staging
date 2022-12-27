import 'swiper/css'
import 'swiper/css/pagination'

import React from 'react'
import Image from 'next/image'
import styled, { useTheme } from 'styled-components'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import { Container, Separator, Title } from 'src/components'
import { PlayIcon } from 'src/icons'
import { device } from 'src/utils'

import sildeImage from '../../../public/images/about/slide-1.png'
import secondSildeImage from '../../../public/images/about/slide-2.png'
import teamImage from '../../../public/images/about/team.png'
import nextImage from '../../../public/images/next-black.svg'
import prevImage from '../../../public/images/prev-black.svg'
import { AboutFounder } from './about-founder'
import { dataImages } from './types'

export const ContentAbout = () => {
  const { white, black } = useTheme()
  const swiperRef = React.useRef<SwiperRef>(null)

  return (
    <>
      <Container>
        <WrapTitle>
          <CustomTitle>
            Professional Home Staging And Real Estate Photography
          </CustomTitle>
        </WrapTitle>
        <Separator />
        <WrapDesc>
          <Desc>
            Our award-winning TNT STAGING team is dedicated to adding value to
            your property, helping you sell it faster and for more through
            professional staging and same-day real estate photography
          </Desc>
        </WrapDesc>
        <WrapperImage>
          <TeamImage priority src={teamImage} alt="team img" />
          <CustomPlayIcon />
        </WrapperImage>

        <Wrapper>
          <Title color={white}>
            Why do Home Builders, Realtors and Investors Trust TNT Staging?
          </Title>
          <Separator style={{ background: white }} />
          <Content>
            {dataImages?.map((el) => (
              <Item key={el.id}>
                <ItemImage src={el.image} alt={el.title} />
                <ItemTitle>{el.title}</ItemTitle>
                <ItemDesc>{el.desc}</ItemDesc>
              </Item>
            ))}
          </Content>
        </Wrapper>

        <Title color={black}>Awards and Designations</Title>
        <Separator />
        <WrapDesc>
          <Desc>
            TNT Staging is a team of certified Luxury Home Staging Specialists
            (LHS). TNT Staging was awarded the title of Best Staging Team by the
            International Association of Home Staging Professionals (IAHSP). Our
            TNT Team was honored to receive multiple awards in Best of Home
            Staging for Staging Excellence, Industry Leadership and Customer
            Service! We have been awarded the Trifecta! Our staging company, TNT
            Staging, will continue to deliver excellent service to our clients
            and advance our professional growth to provide even more value.
          </Desc>
        </WrapDesc>
        <WrapSwiper>
          <Swiper
            ref={swiperRef}
            slidesPerView={3}
            spaceBetween={10}
            className="mySwiper">
            <SwiperSlide>
              <Image src={secondSildeImage} alt="slide" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={sildeImage} alt="slide" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={secondSildeImage} alt="slide" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={secondSildeImage} alt="slide" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={secondSildeImage} alt="slide" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={secondSildeImage} alt="slide" />
            </SwiperSlide>
          </Swiper>
          <Arrows>
            <div onClick={() => swiperRef?.current?.swiper.slidePrev()}>
              <Prev src={prevImage} alt="prev" priority />
            </div>
            <div onClick={() => swiperRef?.current?.swiper.slideNext()}>
              <Next src={nextImage} alt="prev" priority />
            </div>
          </Arrows>
        </WrapSwiper>

        <Title color={black}>Company Founders</Title>
        <Separator />
      </Container>

      <AboutFounder />
    </>
  )
}

const CustomTitle = styled((props) => <Title {...props} />)`
  color: ${({ theme }) => theme.black};
`
const WrapTitle = styled.div`
  max-width: 1586px;
  margin: 110px auto 0;
  @media ${device.tablet} {
    margin: 50px auto 0;
  }
`

const WrapDesc = styled.div`
  max-width: 864px;
  margin: 0 auto;
`

const Desc = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
`

const TeamImage = styled(Image)`
  width: 100%;
  height: auto;
`

const WrapperImage = styled.div`
  position: relative;
  margin: 60px 0 110px;
`

const CustomPlayIcon = styled(PlayIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`

const Wrapper = styled.div`
  background: ${({ theme }) => theme.grey};
  padding: 42px 60px 58px;
  margin-bottom: 110px;
  @media ${device.tablet} {
    padding: 42px 20px 58px;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  grid-gap: 80px 20px;
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
  @media ${device.laptop} {
    max - width: initial;
  }
`

const WrapSwiper = styled.div`
  margin: 60px 0;
`

const Prev = styled(Image)`
  cursor: pointer;
`

const Next = styled(Prev)``

const Arrows = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-top: 30px;
`
