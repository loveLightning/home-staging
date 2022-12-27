import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled, { useTheme } from 'styled-components'

import { Container, FormMessage, Separator, Title } from 'src/components'
import { PlayIcon } from 'src/icons'
import { device } from 'src/utils'

import image from '../../../public/images/about/about-kitchen.png'
import firstBlock from '../../../public/images/about/first-block.png'
import firstFounderSmall from '../../../public/images/about/first-founder-small.png'
import firstFounder from '../../../public/images/about/proff1.png'
import secondFounder from '../../../public/images/about/proff2.png'
import secondBlock from '../../../public/images/about/second-block.png'
import secondFounderSmall from '../../../public/images/about/second-founder-small.png'
import videoKitchen from '../../../public/images/about/video-kitchen.png'

export const AboutFounder = () => {
  const { black } = useTheme()

  return (
    <>
      <Container>
        <WrapperFounders>
          <Founder>
            <FounderImage src={firstFounder} alt="image" />
            <FounderImageSmall src={firstFounderSmall} alt="image" />

            <TitleFounder>Tatiana Mozerova</TitleFounder>
            <CompetitionDesc>Accredited Staging Professional</CompetitionDesc>
            <AboutFounderDesc>
              An adventurer at heart, Tatiana Mozerova found her way to
              Charlotte,NC after leaving her home in Irkutsk, Russia to travel
              the world. Tatiana loves to express her creative side and is drawn
              to take on challenges. She is celebrated for her ability to bring
              a space to life by connecting function with emotion. Tatiana is
              ASP (Accredited Staging Professional) certified and an IAHSP
              (International Association of Accredited Home Staging
              Professionals) board member with 10+ years of professional
              experience in residential staging & design and real estate
              photography. She holds a degree in Architectural Design and
              Construction.
            </AboutFounderDesc>
            <CustomLink href="mailto:info@tntstaging.com">
              info@tntstaging.com
            </CustomLink>
            <CustomLink href="tel:+704-STAGING">704-STAGING</CustomLink>
          </Founder>
          <Founder>
            <FounderImage src={secondFounder} alt="image" />
            <FounderImageSmall src={secondFounderSmall} alt="image" />

            <TitleFounder>Tatiana Murga</TitleFounder>
            <CompetitionDesc>Interior design and Marketing</CompetitionDesc>
            <AboutFounderDesc>
              Tatiana Murga brought her industrious work-ethic and resiliency
              with her when she moved to the US from her hometown of Moscow,
              Russia. A true entrepreneur, she never shys away from an
              opportunity to build something great. She is known for her
              intrepid spirit and her delightful sense of humor. She is founding
              president of RESA (Real Estate Staging Association) in the
              Charlotte Region and is a RESA-PRO certified staging professional.
              She holds 10+ years of professional experience in marketing, sales
              and finance in top Fortune 100 Companies with a degree in Business
              and Economics.
            </AboutFounderDesc>
            <CustomLink href="mailto:info@tntstaging.com">
              info@tntstaging.com
            </CustomLink>
            <CustomLink href="tel:+(704) 618-8591">(704) 618-8591</CustomLink>
          </Founder>
        </WrapperFounders>
      </Container>

      <AboutImage src={image} alt="image" />

      <Container>
        <Title color={black}>Professional Home Staging That Sells</Title>
        <Separator />
        <WrapperDesc>
          <Desc>
            Our award-winning TNT STAGING team is dedicated to adding value to
            your property, helping you sell it faster and for more through
            professional staging and same-day real estate photography
          </Desc>
        </WrapperDesc>

        <Blocks>
          <Block reverse={true}>
            <LeftBlock>
              <TitleBlock>home staging</TitleBlock>
              <SmallLine />
              <DescBlock>
                <Span> We stage houses in 1 day!</Span> That means while our
                competitors are still getting set up, your house is ready for
                showings sooner and already attracting buyers. <br />
                <br />
                We offer a <Span>shorter minimum</Span> than our competitors.
                Which means a greater return on your investment. <br />
                <br />
                <Span>We own 100% of our inventory.</Span> So we can offer
                better value and greater flexibility because we aren’t
                negotiating with a third party rental company. <br />
                <br />
                We are the <Span>
                  only staging company in the Carolinas
                </Span>{' '}
                that includes curtains and rods in our staging packages. These
                items add tremendous value and appeal to buyers. <br />
                <br />
                We understand that when it comes to selling your property, time
                is money. A house that sits for sale costs you money. Houses
                that are professionally staged not only <Span>
                  sell faster
                </Span>{' '}
                but they sell for a <Span>higher price.</Span> That means a
                greater return on your investment. Period.
              </DescBlock>
            </LeftBlock>

            <RightBlock>
              <MyImage src={firstBlock} alt="image" />
              <SmallImage src={firstBlock} alt="image" />
            </RightBlock>
          </Block>

          <Block reverse={false}>
            <LeftBlock>
              <MyImage src={secondBlock} alt="image" />
              <SmallImage src={firstBlock} alt="image" />
            </LeftBlock>

            <RightBlock>
              <TitleBlock>Why stage with us?</TitleBlock>
              <SmallLine />
              <DescBlock>
                And don’t forget,{' '}
                <Span>
                  investment in staging is always less than the cost of a price
                  drop!
                </Span>{' '}
                <br />
                <br />
                The TNT Staging team is specially trained to prepare a home for
                sale. Through our exclusive approach to home staging, we
                developed an <Span>outstanding track record</Span> of helping
                investors, agents, and homeowners sell their homes faster and
                for top dollar. <br /> <br />
                Our goal is to provide the <Span>best value</Span> and{' '}
                <Span>the highest quality</Span> services. We know that when a
                buyer is emotionally connected to a property they will pay more
                for it. We understand what makes a house more appealing to a
                potential buyer. And just as importantly, we understand what
                turns a buyer off. That’s why we expertly assess each house we
                stage to accentuate the positives of the property and camouflage
                the negatives.
                <br /> <br />
                Staging is not just about style, design or taste. It’s about{' '}
                <Span>marketing</Span> your house in a way that{' '}
                <Span>excites</Span> the maximum number of potential buyers
                possible. That’s why our client-focused “one-stop-shop” design
                provides you high-quality, reliable services to get your house
                prepped, staged and photographed so your property stands out
                among the competition.
              </DescBlock>
            </RightBlock>
          </Block>
        </Blocks>

        <Title color={black}>Our Team</Title>
        <Separator />

        <WrapperImage>
          <TeamImage src={videoKitchen} alt="team img" />
          <CustomPlayIcon />
        </WrapperImage>

        <FormMessage value="1" />
      </Container>
    </>
  )
}

const WrapperFounders = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media ${device.laptopS} {
    flex-direction: column;
  }
`

const Founder = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  @media ${device.laptopS} {
    width: 100%;
  }
`

const TitleFounder = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
  margin: 25px 0 10px;
`

const CompetitionDesc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.black};
`

const AboutFounderDesc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({ theme }) => theme.grey};
  margin-bottom: 10px;
`

const CustomLink = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.extra_red};
`

const FounderImage = styled(Image)`
  width: 100%;
  height: auto;
  @media ${device.laptopS} {
    display: none;
  }
`

const AboutImage = styled(Image)`
  width: 100%;
  height: auto;
  margin: 45px 0 110px;
`

const WrapperDesc = styled.div`
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
const Span = styled.span`
  font-weight: 600;
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

const MyImage = styled(Image)`
  height: auto;
  width: 100%;
  @media ${device.laptopS} {
    display: none;
  }
`

const SmallImage = styled(Image)`
  display: none;
  @media ${device.laptopS} {
    display: block;
    height: auto;
    width: 100%;
  }
`

const FounderImageSmall = styled(Image)`
  display: none;
  @media ${device.laptopS} {
    display: block;
    height: auto;
    width: 100%;
  }
`
