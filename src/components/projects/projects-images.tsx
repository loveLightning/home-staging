import React, { useState } from 'react'
import Image from 'next/image'
import styled, { useTheme } from 'styled-components'

import {
  Container,
  dataExperience,
  dataPagination,
  PaginationTypes,
  Separator,
  Title,
} from 'src/components'
import { device } from 'src/utils'

import { dataImages } from './types'

export const ProjectsImages = () => {
  const { extra_red } = useTheme()
  const [data, setData] = useState(dataExperience)
  const [pageNumber, setPageNUmber] =
    useState<PaginationTypes[]>(dataPagination)

  const activeHandler = (id: number) => {
    setData((prev) => {
      const newState = prev.map((el) => {
        if (el.id === id) {
          return { ...el, active: true }
        } else {
          return { ...el, active: false }
        }
      })

      return newState
    })
  }

  const changePage = (id: number) => {
    setPageNUmber((prev) => {
      const newState = prev.map((el) => {
        if (el.id === id) {
          return { ...el, active: true }
        } else {
          return { ...el, active: false }
        }
      })

      return newState
    })
  }

  return (
    <Container>
      <WrapTitle>
        <CustomTitle>
          Professional Home Staging and Real Estate Photography
        </CustomTitle>
      </WrapTitle>
      <Separator fill={extra_red} />
      <WrapDesc>
        <Desc>
          Successful home staging is what our TNT team does best. Based in the
          Charlotte area, we focus on providing the highest quality services at
          affordable, fair and competitive market rates. Please feel free to
          reach out and we’ll provide you with a quote within 24-48 hours after
          we’ve seen the property. We work fast and will accommodate your busy
          schedule.
        </Desc>
      </WrapDesc>
      <WrapeprButtons>
        {data?.map((el) => (
          <Button
            onClick={() => activeHandler(el.id)}
            key={el.id}
            active={el.active}>
            {el.title}
          </Button>
        ))}
      </WrapeprButtons>
      <WrapImages>
        {dataImages?.map((el) => (
          <ImageProject src={el.image} key={el.id} alt="image project" />
        ))}
      </WrapImages>
      <Pagination>
        {pageNumber?.map((el, id) => (
          <Page active={el.active} onClick={() => changePage(id)} key={el.id}>
            <PageNumber active={el.active}>{el.title}</PageNumber>
          </Page>
        ))}
      </Pagination>
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

const CustomTitle = styled((props) => <Title {...props} />)`
  color: ${({ theme }) => theme.black};
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

const WrapeprButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
  margin: 60px 0;
  @media ${device.laptopL} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`

interface StyledButton {
  active: boolean
}

const Button = styled.button<StyledButton>`
  background: ${({ active, theme }) =>
    active ? theme.extra_red : theme.btn_disabled};
  border-radius: 5px;
  padding: 19px 68px;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  color: ${({ theme, active }) => (active ? theme.white : theme.black)};
  border: none;
  transition: 0.4s ease all;
  cursor: pointer;
  @media ${device.laptopL} {
    padding: 19px 0;
  }
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 80px;
`

interface PaginationStyled {
  active?: boolean
}

const Page = styled.div<PaginationStyled>`
  width: 59px;
  height: 59px;
  background: ${({ active, theme }) =>
    active ? theme.extra_red : theme.btn_disabled};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease all;
`

const PageNumber = styled.p<PaginationStyled>`
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ active, theme }) => (active ? theme.white : theme.black)};
  transition: 0.4s ease all;
`

const WrapImages = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

const ImageProject = styled(Image)`
  width: 100%;
  height: auto;
`
