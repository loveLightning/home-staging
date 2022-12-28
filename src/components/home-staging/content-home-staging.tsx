import React, { useState } from 'react'
import Image from 'next/image'
import styled, { useTheme } from 'styled-components'

import { Container, Separator, Title } from 'src/components'
import { DropdownArrowIcon, PlayIcon } from 'src/icons'
import { device } from 'src/utils'

import kingKitchen from '../../../public/images/home-staging/king-kitchen.png'
import qaImage from '../../../public/images/home-staging/qa.png'
import smallVideo from '../../../public/images/home-staging/small-sofa.png'
import imageVideo from '../../../public/images/home-staging/video-image.png'
import { dataDropdown, dataImages, secondDataImages } from './types'

export const ContentHomeStaging = () => {
  const { black, white } = useTheme()
  const [dropDown, setDropdown] = useState(dataDropdown)

  const dropdownHandler = (id: number) => {
    setDropdown((prev) => {
      const newState = prev.map((el) => {
        if (el.id === id) {
          return { ...el, active: !el.active }
        } else {
          return { ...el }
        }
      })

      return newState
    })
  }

  return (
    <Container>
      <WrapTitle>
        <Title color={black}>
          Home Staging Is A Great Marketing Tool To Sell Homes
        </Title>
      </WrapTitle>
      <Separator />
      <WrapDesc>
        <Desc>
          Home staging is a craft. It’s the process of carefully selecting
          furniture and decor to draw the personality out of a space and to
          evoke an attachment to those who view it. Our team of experts
          understands how to design a space to bring forth a style that is both
          inviting and captivating for the widest number of potential buyers.
          TNT Staging is here to help get you from STAGED to SOLD in no time.
        </Desc>
      </WrapDesc>

      <WrapperImage>
        <ImageVideo src={imageVideo} alt="img" />
        <SmallVideo src={smallVideo} alt="img" />
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

      <Title color={black}>Our Recently BOOM! SOLD! Homes</Title>
      <Separator />

      <ContentBlog>
        {secondDataImages?.map((el) => (
          <ItemSold key={el.id}>
            <ImageBlog src={el.image} priority alt="blog" />
            {el.id === 0 && (
              <ItemTitleSold>
                Sold In <Span>2 Days</Span> After Staging
              </ItemTitleSold>
            )}
            {el.id === 1 && (
              <ItemTitleSold>
                Sold In <Span>4 Days</Span> After Staging
              </ItemTitleSold>
            )}
            {el.id === 2 && (
              <ItemTitleSold>
                Sold In <Span>2 Days</Span> After Staging
              </ItemTitleSold>
            )}
            {el.id === 3 && (
              <ItemTitleSold>
                Sold In <Span>2 Weeks</Span>{' '}
              </ItemTitleSold>
            )}
            {el.id === 4 && (
              <ItemTitleSold>
                Sold In <Span>5 Days</Span> After Staging
              </ItemTitleSold>
            )}
            {el.id === 5 && (
              <ItemTitleSold>
                Sold In <Span>2 Days</Span> After Staging
              </ItemTitleSold>
            )}

            <ItemDescSold>{el.desc}</ItemDescSold>
          </ItemSold>
        ))}
      </ContentBlog>

      <Title color={black}>Q&A With TNT</Title>
      <Separator />
      <WrapperDropdown>
        <LeftBlock>
          {dropDown?.map((el, id) => (
            <DropdownItem key={el.id} onClick={() => dropdownHandler(id)}>
              <TopArea>
                <DropdownTitle>{el.title}</DropdownTitle>
                <WrapperArrow active={el.active}>
                  <DropdownArrowIcon />
                </WrapperArrow>
              </TopArea>

              <DropdownDesc active={el.active}>{el.desc}</DropdownDesc>
            </DropdownItem>
          ))}
        </LeftBlock>
        <RightBlock>
          <ImageQa src={qaImage} alt="image" />
          <KingKitchen src={kingKitchen} alt="image" />
        </RightBlock>
      </WrapperDropdown>
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

const ImageVideo = styled(Image)`
  width: 100%;
  height: auto;
  @media ${device.tablet} {
    display: none;
  }
`

const SmallVideo = styled(Image)`
  display: none;
  @media ${device.tablet} {
    display: block;
    width: 100%;
    height: auto;
  }
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

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ContentBlog = styled.div`
  margin-top: 35px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px 20px;
  margin-bottom: 110px;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
    margin-bottom: 60px;
  }
`

const ItemSold = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageBlog = styled(Image)`
  width: 100%;
  height: auto;
`

const ItemTitleSold = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
  margin: 25px 0 10px;
  @media ${device.tablet} {
    font-size: 25px;
  }
`

const ItemDescSold = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({ theme }) => theme.grey};
  margin-bottom: 20px;
`

const Span = styled.span`
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.extra_red};
`

const WrapperDropdown = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media ${device.laptopXS} {
    display: flex;
    flex-direction: column;
  }
`

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`

const RightBlock = styled.div``

interface DropdownStyled {
  active?: boolean
}

const ImageQa = styled(Image)`
  @media ${device.laptopXS} {
    display: none;
  }
`

const DropdownItem = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.btn_disabled};
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const DropdownTitle = styled.p<DropdownStyled>`
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${({ theme }) => theme.black};
  margin-bottom: 15px;
  transition: 0.4s ease all;
`
const DropdownDesc = styled.p<DropdownStyled>`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({ theme }) => theme.grey};
  transition: 0.4s ease all;
  /* display: ${({ active }) => (active ? 'block' : 'none')}; */
  /* opacity: ${({ active }) => (active ? '1' : '0')}; */
  overflow: ${({ active }) => (active ? 'auto' : 'hidden')};
  height: ${({ active }) => (active ? '100px' : '0')};
  transition: height 0.3s ease;
  padding: 0;
  ::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const WrapperArrow = styled.div<DropdownStyled>`
  transition: 0.4s ease all;
  transform: ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const KingKitchen = styled(Image)`
  display: none;
  @media ${device.laptopXS} {
    display: block;
    height: auto;
    width: 100%;
  }
`
