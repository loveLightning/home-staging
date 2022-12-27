import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { Line } from 'src/components'
import { device } from 'src/utils'

import close from '../../../public/images/close.svg'
import logo from '../../../public/images/logo.svg'
import { menuItems } from '../header'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

export const BurgerMenu = ({ open, setOpen }: Props) => {
  const closeMenu = () => {
    setOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <Wrapper open={open}>
      <HeaderMenu>
        <Image src={logo} alt="logo" priority />
        <WrapClose onClick={closeMenu}>
          <Image
            src={close}
            alt="close"
            priority={true}
            height={35}
            width={35}
          />
        </WrapClose>
      </HeaderMenu>
      <CustomLine />
      <Menu>
        {menuItems?.map((el) => (
          <Item key={el.id}>
            <MenuItem onClick={closeMenu} href={el.link}>
              {el.title}
            </MenuItem>
            <CustomLine />
          </Item>
        ))}
      </Menu>
    </Wrapper>
  )
}

interface StyledProps {
  open: boolean
}

const Wrapper = styled.div<StyledProps>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  height: 100vh;
  width: 100vw;
  transition: 0.4s ease all;
  background-color: ${({ theme }) => theme.white};
  z-index: 20;
  overflow: auto;
  transform: ${({ open }) => (!open ? 'translateX(-100%)' : 'translateX(0)')};
`

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
`

const MenuItem = styled(Link)`
  letter-spacing: 0.05rem;
  color: ${({ theme }) => theme.grey};
  font-weight: 400;
  font-size: 25px;
  line-height: 140%;
  margin: 0 24px;
  @media ${device.mobileL} {
    font-size: 20px;
  }
`

const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 24px;
`

const CustomLine = styled((props) => <Line {...props} />)`
  margin: 25px 0;
`

const WrapClose = styled.div`
  cursor: pointer;
`

const Item = styled.div``
