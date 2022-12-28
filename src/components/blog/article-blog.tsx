import React, { useState } from 'react'
import Select from 'react-select'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled, { useTheme } from 'styled-components'

import {
  Button,
  Container,
  dataPagination,
  Input,
  PaginationTypes,
} from 'src/components'
import { ArrowIcon, SearchIcon } from 'src/icons'
import { device } from 'src/utils'

import { dataBlog } from './types'

const options = [
  { value: 'chocolate', label: 'Sort by: New Articles' },
  { value: 'strawberry', label: 'Sort by: New Articles' },
  { value: 'vanilla', label: 'Sort by: New Articles' },
]

export const ArticleBlog = () => {
  const { extra_red } = useTheme()
  const router = useRouter()
  const [pageNumber, setPageNUmber] =
    useState<PaginationTypes[]>(dataPagination)

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

  const openArticle = (id: number) => {
    router.push(`/article/${id}`)
  }

  return (
    <Container>
      <WrapFilter>
        <WrapInput>
          <Wrap>
            <CustomInput placeholder="Search article" />
            <CustomSearchIcon />
          </Wrap>
          <CustomButton>Search</CustomButton>
        </WrapInput>
        <Select
          value={options.value}
          options={options}
          defaultValue={options[0]}
        />
      </WrapFilter>
      <ContentBlog>
        {dataBlog?.map((el, id) => (
          <Item key={el.id}>
            <WrapHero>
              <ImageBlog src={el.image} priority alt="blog" />
              <ItemTitle>{el.title}</ItemTitle>
              <ItemDesc>{el.desc}</ItemDesc>
            </WrapHero>
            <WrapInfo onClick={() => openArticle(id)}>
              <InfoText>Read article</InfoText>
              <ArrowIcon fill={extra_red} />
            </WrapInfo>
          </Item>
        ))}
      </ContentBlog>
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

const ContentBlog = styled.div`
  margin-top: 35px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px 20px;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

const WrapFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
  @media ${device.laptopXL} {
    flex-direction: column;
    gap: 30px;
    align-items: flex-end;
  }
`

const Wrap = styled.div`
  max-width: 587px;
  width: 100%;
  position: relative;
`

const WrapInput = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 891px;
  width: 100%;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`

const CustomButton = styled((props) => <Button {...props} />)`
  @media ${device.mobileL} {
    width: 100%;
  }
`

const CustomSearchIcon = styled((props) => <SearchIcon {...props} />)`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`

const CustomInput = styled((props) => <Input {...props} />)`
  width: 100%;
  padding-left: 50px;
  border: ${({ theme }) => theme.btn_disabled} 1px solid;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageBlog = styled(Image)`
  width: 100%;
  height: auto;
`

const ItemTitle = styled.p`
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

const ItemDesc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({ theme }) => theme.grey};
  margin-bottom: 20px;
`

const WrapInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`

const InfoText = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.extra_red};
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

const WrapHero = styled.div`
  height: 100%;
`
