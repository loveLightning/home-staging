import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { BurgerMenu, Container } from 'src/components'
import { device } from 'src/utils'

import logo from '../../../public/images/logo.svg'
import menu from '../../../public/images/menu.svg'
import { menuItems } from './types'

export const Header = () => {
  const [open, setOpen] = useState(false)

  const openMenu = () => {
    setOpen(true)
    document.body.style.overflow = 'hidden'
  }

  return (
    <Wrapper>
      <Container>
        <Content>
          <Logo priority src={logo} alt="logo" />
          <Menu>
            {menuItems?.map((el) => (
              <MenuWrapper key={el.id}>
                <MenuItem href={el.link}>{el.title}</MenuItem>
                {el.id !== menuItems?.length - 1 && <Circle />}
              </MenuWrapper>
            ))}
          </Menu>
          <WrapBurger onClick={openMenu}>
            <Image
              src={menu}
              priority={true}
              alt="menu"
              width={40}
              height={40}
            />
          </WrapBurger>
        </Content>
      </Container>
      <BurgerMenu open={open} setOpen={setOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  height: 80px;
  padding: 15px 0;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Image)``

const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  @media ${device.laptopS} {
    display: none;
  }
`

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media ${device.laptopL} {
    gap: 10px;
  }
`

const MenuItem = styled(Link)`
  font-size: 20px;
  letter-spacing: 0.05rem;
  color: ${({ theme }) => theme.grey};
  @media ${device.laptopL} {
    font-size: 16px;
  }
`

const Circle = styled.div`
  border: 1px solid #e65a4c;
  width: 7px;
  height: 7px;
  border-radius: 50%;
`

const WrapBurger = styled.div`
  display: none;
  @media ${device.laptopS} {
    display: block;
    cursor: pointer;
  }
`
