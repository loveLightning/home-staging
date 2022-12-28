import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled, { useTheme } from 'styled-components'

import { Container, FormMessage, Separator, Title } from 'src/components'
import { ArrowIcon } from 'src/icons'
import { device } from 'src/utils'

import firstImage from '../../../public/images/services/1.png'
import secondImage from '../../../public/images/services/2.png'
import thirdImage from '../../../public/images/services/3.png'
import fourthImage from '../../../public/images/services/4.png'
import kitchen from '../../../public/images/services/kitchen.png'
import smallKitchen from '../../../public/images/services/small-kitchen.png'

export const ServicesContent = () => {
  const { black } = useTheme()
  const router = useRouter()

  return (
    <Container>
      <WrapTitle>
        <Title color={black}>TNT Staging Is Your Unique One-Stop Shop</Title>
      </WrapTitle>
      <Separator />
      <WrapDesc>
        <Desc>
          TNT Staging is a fully-insured company that provides high-quality,
          reliable services related to every real estate transaction. Based in
          the Charlotte area, the TNT team works with many real estate brokers,
          investors and homeowners in the Carolinas
        </Desc>
      </WrapDesc>
      <Blocks>
        <Block reverse={true}>
          <LeftBlock>
            <TitleBlock>home staging</TitleBlock>
            <SmallLine />
            <DescBlock>
              You deserve the best return on your investment! Home Staging is a
              perfect marketing tool to sell homes faster and for the highest
              price. Our talented team of staging experts knows precisely how to
              highlight your properties best features. In doing so, TNT Staging
              captures the attention and interest of the widest number of
              potential buyers. By knowing what draws the eye and staying in
              tune with the latest market trends, our team is uniquely skilled
              at prepping properties for market and standing out among the
              competition. We offer staging services in transitional, modern,
              mid-century modern & contemporary styles.
            </DescBlock>
            <WrapperInfo onClick={() => router.push('/services/home-staging')}>
              <InfoTitle>More information</InfoTitle>
              <ArrowIcon />
            </WrapperInfo>
          </LeftBlock>

          <RightBlock>
            <MyImage src={firstImage} alt="image" />
          </RightBlock>
        </Block>

        <Block reverse={false}>
          <LeftBlock>
            <MyImage src={secondImage} alt="image" />
          </LeftBlock>

          <RightBlock>
            <TitleBlock>Real Estate Photography</TitleBlock>
            <SmallLine />
            <DescBlock>
              We understand first hand how important it is to have sharp,
              high-quality professional real-estate photos available as quickly
              as possible and that’s precisely what we provide. Our photographer
              knows how to showcase a property in eye-catching crisp detail,
              without misleading wide angle distortions or distracting
              composition. You can expect professional and polished images that
              flow and guide the eye through the property. We also coordinate
              with our team so that photos can be taken the same day staging is
              complete. Gorgeous magazine-worthy photos are delivered straight
              to your inbox, edited and formatted for your immediate use.
            </DescBlock>
            <WrapperInfo onClick={() => router.push('/services/photography')}>
              <InfoTitle>More information</InfoTitle>
              <ArrowIcon />
            </WrapperInfo>
          </RightBlock>
        </Block>

        <Block reverse={true}>
          <LeftBlock>
            <TitleBlock>short-term rental set up</TitleBlock>
            <SmallLine />
            <DescBlock>
              We’ve taken our award-winning expertise in home staging and
              applied it to the short-term rental market. First impressions are
              absolutely critical to your return on investment. A desirable STR
              listing results in a higher nightly occupancy rate- which means
              more profit in your pocket. We know firsthand what makes an STR
              standout and what gets a vacation rental booked. Our team of
              experts will create a cohesive and appealing design for your
              unique space, as well as furnish and set up your vacation rental
              home so you can focus on your business. We handle the design,
              acquiring the furnishings, installation and clean-up; leaving you
              a dazzling and stylish short-term rental ready to be photographed
              and booked! We even pass along our savings to you by sourcing our
              on trend furniture and decor through our incredible wholesale
              partners.
            </DescBlock>
            <WrapperInfo>
              <InfoTitle>More information</InfoTitle>
              <ArrowIcon />
            </WrapperInfo>
          </LeftBlock>

          <RightBlock>
            <MyImage src={thirdImage} alt="image" />
          </RightBlock>
        </Block>

        <Block reverse={false}>
          <LeftBlock>
            <MyImage src={fourthImage} alt="image" />
          </LeftBlock>

          <RightBlock>
            <TitleBlock>online furniture store</TitleBlock>
            <SmallLine />
            <DescBlock>
              Our team knows furniture. We touch it everyday. After years of
              experience we have been able to expertly navigate the furniture
              market to pick quality pieces with the best design. We know what’s
              worth skipping and what’s worth keeping and now we have taken the
              hassle out of furniture shopping for you. With access to most
              major furniture manufacturers in the U.S. you can trust we have
              something for everyone. Check out our online store where you can
              shop the collection and have your pieces delivered straight to our
              warehouse in Charlotte for local pick-up.
            </DescBlock>
            <WrapperInfo>
              <InfoTitle>More information</InfoTitle>
              <ArrowIcon />
            </WrapperInfo>
          </RightBlock>
        </Block>
      </Blocks>

      <ImageKitchen src={kitchen} alt="kitchen img" />
      <SmallImageKitchen src={smallKitchen} alt="kitchen img" />

      <FormMessage value="2" />
    </Container>
  )
}

const WrapDesc = styled.div`
  max-width: 864px;
  margin: 0 auto 60px;
`

const Desc = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  color: ${({ theme }) => theme.black};
`

const WrapTitle = styled.div`
  max-width: 1586px;
  margin: 110px auto 0;
  @media ${device.tablet} {
    margin: 50px auto 0;
  }
`

const Blocks = styled.div`
  margin-bottom: 110px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media ${device.laptopS} {
    display: flex;
    flex-direction: column;
    gap: 45px;
    margin-bottom: 50px;
  }
`
interface BlockStyled {
  reverse?: boolean
}

const Block = styled.div<BlockStyled>`
  display: flex;
  gap: 60px;
  align-items: center;
  @media ${device.laptopS} {
    flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
    gap: 20px;
  }
`
const TitleBlock = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 140%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
`
const SmallLine = styled.div`
  width: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.small_line};
  margin: 15px 0 20px;
`
const DescBlock = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: ${({ theme }) => theme.grey};
`

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media ${device.laptopS} {
    width: 100%;
  }
`

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media ${device.laptopS} {
    width: 100%;
  }
`

const MyImage = styled(Image)`
  height: auto;
  width: 100%;
`

const ImageKitchen = styled(Image)`
  height: auto;
  width: 100%;
  margin-bottom: 110px;
  @media ${device.tablet} {
    display: none;
  }
`
const SmallImageKitchen = styled(Image)`
  display: none;
  height: auto;
  width: 100%;
  margin-bottom: 60px;
  @media ${device.tablet} {
    display: block;
  }
`

const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 42px;
  cursor: pointer;
  @media ${device.laptopS} {
    padding: 20px 0 20px;
    margin: 0;
  }
`
const InfoTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.extra_red};
`
