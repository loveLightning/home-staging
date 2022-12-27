import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled, { useTheme } from 'styled-components'

import { Container } from 'src/components'
import { ArrowIcon } from 'src/icons'
import { device } from 'src/utils'

import firstImage from '../../../public/images/article/1.png'
import secondImage from '../../../public/images/article/2.png'
import thirdImage from '../../../public/images/article/3.png'
import fourthImage from '../../../public/images/article/4.png'
import fifthImage from '../../../public/images/article/5.png'
import sixthImage from '../../../public/images/article/6.png'
import seventhImage from '../../../public/images/article/7.png'

export const ArticleInfo = () => {
  const router = useRouter()
  const { extra_red } = useTheme()

  return (
    <Container>
      <CustomConatiner>
        <WrapperGoBack onClick={() => router.back()}>
          <ArrowIcon fill={extra_red} />
          <ArrowText>Back to the blog</ArrowText>
        </WrapperGoBack>
        <ImageArticle src={firstImage} alt="image" />
        <DateText>November 29, 2020</DateText>
        <TitleText>
          How To Start In Staging Business In 7 Simple Steps
        </TitleText>
        <DescText>
          Do you love to decorate? Do you have an “eye for design”? Are you
          feeling creative? Thinking of a career change? This article will help
          you figure out your first steps and answer a very popular question.
          HSRA is based in Texas with many members nationwide.
        </DescText>
        <TitleText>Step #1 Consider Professional Training</TitleText>
        <DescText>
          It is always a good idea to learn from home stagers who are already
          running their businesses and who are willing to share their knowledge,
          experience and expertise. Our home staging company TNT Staging, based
          out of Charlotte, NC, has great experience with the following three
          home staging organizations: <br></br> <br /> 1. HSRA – The Home
          Staging and ReDesign Alliance <br />
          <br /> HSRA is based in Texas with many members nationwide. It
          provides extensive business training and helps stagers build
          relationships with the top players in the real estate industry. What
          we like about HSRA as experienced and seasoned stagers, is the fact
          that they coach you on how to work on your business rather than in
          your business. HSRA brings tremendous value to our thriving staging
          business. <br /> <br /> 2. IHASP® – The International Association of
          Home Staging Professionals®
          <br /> <br />
          According to their website, IHASP® is the largest and the
          longest-running Home Staging Industry Trade Association. This staging
          association is based in Denver, Colorado with thousands of members
          worldwide. It provides training and guidelines on how to stage and
          redesign homes as well as how to run your staging business. We love
          the supportive, collaborating, family vibe of IHASP® and thoroughly
          enjoy our monthly chapter meetings with other fellow stagers in
          Charlotte, NC. <br /> <br />
          3. RESA – Real Estate Staging Association <br /> <br /> RESA’s mission
          is to bring the home staging industry to the next level by creating
          high industry standards that would help both home staging
          professionals and their customers maximize their profits. Their vision
          is to make home staging a standard practice when selling real estate.
          RESA is based in Columbus, NC.
        </DescText>
        <ImageArticle src={secondImage} alt="image" />
        <TitleText>Step #2 Build Your Portfolio </TitleText>
        <DescText>
          Start with your own home or help your friends and family make their
          homes look better. Rearranged furniture in your house, your apartment
          or your room, put together a vignette, found something cute at your
          local home decor store? That’s a great start! Now use your phone to
          take photos or hire a professional photographer to enhance your
          portfolio. Post it on social media. Let your followers know what you
          do. Keep going, one step at a time…
        </DescText>
        <ImageArticle alt="image" src={thirdImage} />
        <TitleText>
          Step #3 Establish And Maintain Your Online Presence
        </TitleText>
        <DescText>
          We live in an exciting era of digital marketing that is virtually
          free. Be active on social media, create a website, consider creating a
          Google business page, if you want your business to be found on Google
          Maps. Create great content that would be useful,
          aesthetically-pleasing, fun and engaging. Post regularly. Consistency
          is key. Check your direct messages, at TNT Staging we receive a lot of
          staging requests starting with: “I’ve been following you on social
          media. Your work is beautiful…”. Your online presence is very
          important. The better it is, the better your chances to be hired. We
          all shop online both for goods and services. So make sure you or your
          business can be found online too.{' '}
        </DescText>
        <ImageArticle src={fourthImage} alt="image" />
        <TitleText>Step #4 Pick Your Niche</TitleText>
        <DescText>
          There are two types of home staging: owner-occupied and vacant, you
          could also do staging or redesign for living, staging or design
          consultations, short-term vacation rentals staging and design. Most
          home stagers start with owner-occupied staging and redesign, since,
          unlike vacant home staging, it does not require having a lot of
          inventory, a storage unit or a warehouse to store your inventory.{' '}
          <br />
          <br />
          The beauty of vacant home staging, the niche that we picked for TNT
          Staging, is the ability to work with a blank canvas and create pretty
          much whatever you want. Vacant home staging done right is usually very
          impactful, before and after photos are day and night. Plus you don’t
          have to deal with the emotional attachment of the homeowners to their
          home, You also don’t have to go through other people’s stuff etc.{' '}
          <br />
          <br />
          Short-term vacation rental (STVR) business is on the rise. Vacation
          rentals need to be furnished and thoughtfully designed, so they could
          provide their owners with the highest return on their investment
          (ROI): higher occupancy rates and higher nighty rates.{' '}
        </DescText>
        <ImageArticle src={fifthImage} alt="image" />
        <TitleText>
          Step #5 Establish Relationship With Your Local Real Estate Agents
        </TitleText>
        <DescText>
          Real estate agents are a great source of staging leads. If you help
          them sell real estate faster and for more, they’ll keep hiring you and
          keep recommending your home staging and redesign services to their
          clients and colleagues. Go to your local real estate firms, brokerage
          offices, become a sponsor, participate in the events for real estate
          specialists. Follow them on social media, invite them for coffee.
          Build great relationships. Deliver what you promised and deliver it on
          time. Repeat. Be consistent.
        </DescText>
        <ImageArticle src={sixthImage} alt="image" />
        <TitleText>
          Step #6 Connect With Your Local Colleagues, Join Your Local Chapter,
          Get Support
        </TitleText>
        <DescText>
          Unity is strength. Establish relationships with your fellow home
          stagers, collaborate, exchange experience, learn from each other and
          support each other on your journey. Most of the professionals from the
          same industry deal with the same issues, believe it or not 😉 <br />
          <br />
          See Step #1, Visit HSRA, IHASP and RESA websites to find information
          on local chapters and other home stagers in your area as well as
          upcoming events for home staging and redesign professionals. We find
          it helpful and we do participate in our local chapter meetings as well
          as national and international professional events. It feels great to
          know that you’re not alone, that you can support and feel supported by
          other fellow stagers. A rising tide lifts all boats.
        </DescText>
        <ImageArticle src={seventhImage} alt="image" />

        <TitleText>
          Step #7 Promote Yourself, Tell Everyone What You Do, “Fake It Til You
          Make It”, Attend Local Investors Groups, Social Gatherings, Networking
          Events
        </TitleText>
        <DescText>
          Be known for what you do. Don’t be shy. The loudest marketer wins.
          Promote your talents and your services. See Step #3 on building your
          online presence as well as Step #5 on establishing great working
          relationships with the real estate agents. Besides working with
          realtors®, we also find it very helpful to build relationships with
          your local real estate investors, flippers, builders as well as
          property managers and owners of vacation rentals (STVRs). The first
          three are especially relevant, if you choose to do vacant home
          staging. Find local real estate investor groups on social media, such
          as FaceBook (now Meta), discover MeetUp and other sources available
          online. Attend those meetings and events, don’t be a wallflower, work
          the room, introduce yourself, give away your business cards and other
          marketing materials. Find out how you could become a speaker at some
          of those events. Give away free staging or redesign consultations, if
          that’s what it takes to get your foot through the door.
          <br /> <br />
          You can do it! Good luck!
          <br /> <br />
          Follow us for more helpful tips on home staging and design TNT Staging
          <br /> <br />
          Thank you!
        </DescText>
        <WrittenText>Written by Tatiana Murga, TNT Staging</WrittenText>
      </CustomConatiner>
    </Container>
  )
}

const CustomConatiner = styled.div`
  max-width: 890px;
  margin: 0 auto;
`

const WrapperGoBack = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 45px 0 0;
  cursor: pointer;
`
const ArrowText = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.extra_red};
`

const ImageArticle = styled(Image)`
  width: 100%;
  height: auto;
  margin-top: 30px;
`
const DateText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({ theme }) => theme.black};
  margin-top: 15px;
`

const TitleText = styled.p`
  margin: 40px 0 10px;
  font-weight: 700;
  font-size: 35px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
  @media ${device.tablet} {
    font-size: 24px;
  }
`

const DescText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({ theme }) => theme.grey};
`

const WrittenText = styled.p`
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  color: ${({ theme }) => theme.extra_red};
  margin-top: 30px;
`
