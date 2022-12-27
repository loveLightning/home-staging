import React from 'react'
import { Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { Button, ErrorMessage, Field, Input, Line } from 'src/components'
import { AnyNetworkIcon, FacebookIcon, TwitterIcon } from 'src/icons'
import { footerEmailSchema } from 'src/schemas'
import { device } from 'src/utils'

import logo from '../../../public/images/logo.svg'
import { menuItems } from '../header'

interface ValuesTypes {
  email: string
}

const initialValues: ValuesTypes = {
  email: '',
}

export const FooterInfo = () => {
  const handleSubmit = () => { }

  return (
    <Wrapper>
      <BlockList>
        <InfoCompany>
          <Logo src={logo} alt="logo" />
          <Desc>
            Our award-winning TNT Staging Team is dedicated to creating value to
            your property. We are fully-insured and follow strict standards
            under our Code of Ethics. Our professional and trustworthy team are
            ready to help you. Contact us today for a quote.
          </Desc>
          <Copyright>© Copyright 2022</Copyright>
        </InfoCompany>
        <Menu>
          {menuItems?.map((el) => (
            <ItemMenu href={el.link} key={el.id}>
              {el.title}
            </ItemMenu>
          ))}
        </Menu>
      </BlockList>

      <CustomLine />

      <Subscribe>
        <TitleSubscribe>Subscribe</TitleSubscribe>
        <DescSubscribe>
          Signup for our newsletter and receive design tips and TNT promotions!
        </DescSubscribe>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={footerEmailSchema}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            dirty,
            isValid,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Field>
                <CustomInput
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <CustomErrorMessage>{errors.email}</CustomErrorMessage>
                )}
              </Field>

              <CustomButton type="submit" disabled={!(isValid && dirty)}>
                Subscribe
              </CustomButton>
            </Form>
          )}
        </Formik>
      </Subscribe>

      <CustomLine />

      <BlockList>
        <WrapperFeedback indent>
          <ItemFeedback>
            <Feedback href="tel:+704-STAGING">704-STAGING</Feedback>
            <Feedback href="tel:+704-618-8591">704-618-8591</Feedback>
          </ItemFeedback>
          <ItemFeedback>
            <Feedback href="mailto:info@tntstaging.com">
              info@tntstaging.com
            </Feedback>
            <Feedback href="/">Request a free quote</Feedback>
          </ItemFeedback>
        </WrapperFeedback>

        <WrapperFeedback>
          <ItemFeedback>
            <Place>1818 University Commercial Pl, Charlotte NC 28213</Place>
          </ItemFeedback>
          <ItemFeedback>
            <Place>Mon-Fri: 9:00 AM - 5:00 PM</Place>
            <Place>Sat-Sun: Closed</Place>
          </ItemFeedback>
          <WrapeprSocialNetwork>
            <SocialNetwork href="/">
              <FacebookIcon />
            </SocialNetwork>
            <SocialNetwork href="/">
              <AnyNetworkIcon />
            </SocialNetwork>
            <SocialNetwork href="/">
              <TwitterIcon />
            </SocialNetwork>
          </WrapeprSocialNetwork>
        </WrapperFeedback>
      </BlockList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  @media screen and (max-width: 1700px) {
    gap: 50px;
  }

  @media screen and ${device.laptopL} {
    flex-direction: column;
  }
`

const InfoCompany = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 373px;
  margin-right: 90px;
  @media screen and (max-width: 1700px) {
    margin-right: 50px;
  }
  @media screen and ${device.laptopL} {
    margin-right: 0;
  }
`

const Logo = styled(Image)``

const Desc = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: ${({ theme }) => theme.grey};
  margin: 25px 0 20px;
`
const Copyright = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: ${({ theme }) => theme.grey};
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const ItemMenu = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.grey};
  width: fit-content;
`

const Subscribe = styled.div`
  max-width: 284px;

  @media screen and ${device.laptopL} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
    max-width: 720px;
    width: 100%;
  }
`

const TitleSubscribe = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.grey};
`

const DescSubscribe = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 140%;
  color: ${({ theme }) => theme.grey};
  margin: 10px 0 18px;
`

const CustomInput = styled((props) => <Input {...props} />)`
  margin-bottom: 10px;
  width: 100%;
`

const CustomButton = styled((props) => <Button {...props} />)`
  &:disabled {
    background: ${({ theme }) => theme.grey};
  }
  @media ${device.laptopL} {
    width: 100%;
  }
`

const CustomErrorMessage = styled((props) => <ErrorMessage {...props} />)`
  position: static !important;
  margin-bottom: 10px;
`

interface FeedbackStyled {
  indent?: boolean
}

const WrapperFeedback = styled.div<FeedbackStyled>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 284px;
  margin-right: ${({ indent }) => (indent ? '90px' : '')};
  @media screen and (max-width: 1700px) {
    margin-right: ${({ indent }) => (indent ? '50px' : '')};
  }
  @media screen and ${device.laptopL} {
    margin-right: 0;
  }
`

const ItemFeedback = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Feedback = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.grey};
`

const Place = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.grey};
`
const WrapeprSocialNetwork = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

const SocialNetwork = styled(Link)``

const BlockList = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and ${device.laptopL} {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  @media ${device.mobileXS} {
    flex-direction: column;
    gap: 30px;
  }
`

const CustomLine = styled((props) => <Line {...props} />)`
  display: none;
  @media ${device.laptopL} {
    display: flex;
  }
`

const Form = styled.form`
  @media ${device.laptopL} {
    width: 100%;
  }
`
