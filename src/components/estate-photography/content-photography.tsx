import React from 'react'
import Image from 'next/image'
import styled, { useTheme } from 'styled-components'

import { Container, Separator, Title } from 'src/components'
import { device } from 'src/utils'

import firstImage from '../../../public/images/photography/1.png'
import secondImage from '../../../public/images/photography/2.png'
import fireplace from '../../../public/images/photography/fireplace.png'
import firstSmallImage from '../../../public/images/photography/small-1.png'
import secondSmallImage from '../../../public/images/photography/small-2.png'
import smallFireplace from '../../../public/images/photography/small-fireplace.png'

export const ContentPhotography = () => {
  const { black } = useTheme()

  return (
    <Container>
      <WrapTitle>
        <Title color={black}>Magazine Quality Real Estate Photography</Title>
      </WrapTitle>
      <Separator />
      <WrapDesc>
        <Desc>
          Professional real estate photography is key in marketing property for
          sale.
        </Desc>
      </WrapDesc>

      <Blocks>
        <Block reverse={true}>
          <LeftBlock>
            <TitleBlock>Magazine Quality Real Estate Photography</TitleBlock>
            <SmallLine />
            <DescBlock>
              Our TNT in-house photographer has over{' '}
              <Span>ten years of experience</Span>
              taking amazing real estate photos that help your listing stand out
              from the competition. <br /> <br />
              TNT specializes in creating amazing images designed specifically
              for marketing real estate. We use the most advanced
              <Span>state-of-the-art equipment and software</Span> in order to
              get that magazine look plus we manually edit each photo. <br />{' '}
              <br />
              Our photographer knows how to showcase a property in eye-catching
              crisp detail, without misleading wide angle distortions or
              distracting composition. You can expect professional{' '}
              <Span>and polished images</Span> that flow and guide the eye
              through the property. <br /> <br />
              <Span>Our clients</Span> are home builders, real estate investors,
              real estate agents, realtors, brokers, home owners, business
              owners, designers, decorators and architects who need high-quality
              real estate photography
            </DescBlock>
          </LeftBlock>

          <RightBlock>
            <MyImage src={firstImage} alt="image" />
            <MyImageSmall src={firstSmallImage} alt="image" />
          </RightBlock>
        </Block>

        <Block reverse={false}>
          <LeftBlock>
            <MyImage src={secondImage} alt="image" />
            <MyImageSmall src={secondSmallImage} alt="image" />
          </LeftBlock>

          <RightBlock>
            <TitleBlock>Our prices</TitleBlock>
            <SmallLine />
            <DescBlock>
              We are proud to offer competitive rates for our high-dynamic range
              professional real estate photography. Prices below include
              interior & exterior shots of the property and are delivered to you
              edited and formatted for immediate use. <br />
              <br />
            </DescBlock>
            <Ul>
              <Li>
                0-2,000 sq ft (17-24 Photos) - <Span>$169</Span>
              </Li>
              <Li>
                2,000-3,000 sq ft (25-32 Photos) - <Span>$199</Span>
              </Li>
              <Li>
                3,000-4,000 sq ft (33-41 Photos) - <Span>$229</Span>
              </Li>
              <Li>
                4,000-5,000 sq ft (42-50 Photos) - <Span>$299</Span>
              </Li>
              <Li>
                Over 5,000 sq ft - <Span>Price upon request</Span>
              </Li>
              <Li>
                Travel Fee Outside I-485 - <Span>$30</Span>
              </Li>
              <Li>
                Additional Photos - <Span>$7 per photo</Span>
              </Li>
              <Li>
                Last-Minute Cancellation Fee (Less Than 24 hrs) -{' '}
                <Span>$100</Span>
              </Li>
              <Li>
                Luxury “Day-To-Dusk” Cover Photo - <Span>$30 per image</Span>
              </Li>
            </Ul>
          </RightBlock>
        </Block>
      </Blocks>

      <ImageFireplace src={fireplace} alt="fireplace" />
      <SmallImageFireplace src={smallFireplace} alt="fireplace" />
    </Container>
  )
}

const WrapTitle = styled.div`
  max-width: 1586px;
  margin: 110px auto 0;
  @media ${device.tablet} {
    margin: 50px auto 0;
  }
`

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

const Blocks = styled.div`
  margin-bottom: 110px;
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
  @media ${device.laptopS} {
    display: none;
  }
`

const MyImageSmall = styled(Image)`
  height: auto;
  width: 100%;
  display: none;
  @media ${device.laptopS} {
    display: block;
  }
`

const ImageFireplace = styled(Image)`
  height: auto;
  width: 100%;
  @media ${device.tablet} {
    display: none;
  }
`
const SmallImageFireplace = styled(Image)`
  display: none;
  height: auto;
  width: 100%;
  @media ${device.tablet} {
    display: block;
  }
`

const Span = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: ${({ theme }) => theme.grey};
`

const Li = styled.li`
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: ${({ theme }) => theme.grey};
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-left: 20px;
`
