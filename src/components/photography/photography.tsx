import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled, { useTheme } from 'styled-components'

import { Container, Separator, Title } from 'src/components'
import { ArrowIcon } from 'src/icons'
import { device } from 'src/utils'

import kitchen from '../../../public/images/kitchen.png'
import vase from '../../../public/images/vase.png'
import { photographyData } from './types'

export const Photography = () => {
  const { black } = useTheme()
  const router = useRouter()

  return (
    <div>
      <Container>
        <Title color={black}>
          Professional Home Staging and Real Estate Photography
        </Title>
        <Separator />
        <Content>
          {photographyData?.map((el) => (
            <Item key={el.id}>
              <ImageHome src={el.image} alt={'img'} />
              <TitleSmall>{el.title}</TitleSmall>
              <Desc>{el.desc}</Desc>
              <WrapperInfo onClick={() => router.push(el.link)}>
                <InfoTitle>More information</InfoTitle>
                <ArrowIcon />
              </WrapperInfo>
            </Item>
          ))}
        </Content>
      </Container>
      <SmallResizeImage src={vase} alt="vase" />
      <KitchenImage src={kitchen} alt="kitchen" />
    </div>
  )
}

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media ${device.laptopS} {
    flex-direction: column;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 47%;
  @media ${device.laptopS} {
    width: 100%;
  }
`

const ImageHome = styled(Image)`
  width: 100%;
  height: auto;
`

const Desc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({ theme }) => theme.grey};
  margin-top: 10px;
  height: 66px;
`

const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 42px;
  cursor: pointer;
  @media ${device.laptopS} {
    padding: 46px 0 50px;
    margin: 0;
  }
`

const TitleSmall = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
  margin-top: 25px;
`

const InfoTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.extra_red};
`

const KitchenImage = styled(Image)`
  margin: 110px 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  @media ${device.tablet} {
    display: none;
  }
`

const SmallResizeImage = styled(Image)`
  display: none;
  @media ${device.tablet} {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 0 60px;
  }
`
