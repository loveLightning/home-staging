import React from 'react'
import { Formik } from 'formik'
import styled from 'styled-components'

import {
  Button,
  Container,
  ErrorMessage,
  Field,
  Input,
  Line,
} from 'src/components'
import { footerSchema } from 'src/schemas'
import { device } from 'src/utils'

import { FooterInfo } from './footerInfo'

interface ValuesTypes {
  name: string
  email: string
  phone: string
}

const initialValues: ValuesTypes = {
  name: '',
  email: '',
  phone: '',
}

export const Footer = () => {
  const handleSubmit = (values: ValuesTypes) => {
    console.log(values)
  }

  return (
    <>
      <Wrapper>
        <CustomContainer>
          <WrapperForm>
            <Quote>
              <Title>Get a Free quote</Title>
              <DescQuote>Our manager will contact you shortly</DescQuote>
            </Quote>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={footerSchema}>
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <WrapperFields>
                    <CustomField>
                      <CustomInput
                        placeholder="Name"
                        type="name"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {errors.name && touched.name && (
                        <ErrorMessage>{errors.name}</ErrorMessage>
                      )}
                    </CustomField>
                    <CustomField>
                      <CustomInput
                        placeholder="Email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email && (
                        <ErrorMessage>{errors.email}</ErrorMessage>
                      )}
                    </CustomField>
                    <CustomField>
                      <CustomInput
                        placeholder="Phone"
                        type="phone"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
                      {errors.phone && touched.phone && (
                        <ErrorMessage>{errors.phone}</ErrorMessage>
                      )}
                    </CustomField>
                    <CustomButton type="submit" disabled={isSubmitting}>
                      Send
                    </CustomButton>
                  </WrapperFields>
                </Form>
              )}
            </Formik>
          </WrapperForm>
        </CustomContainer>
      </Wrapper>
      <Line />
      <WrapperInfo>
        <FooterInfo />
      </WrapperInfo>
    </>
  )
}

const Wrapper = styled.div`
  margin-top: 110px;
  padding: 60px 60px 55px;
  background: ${({ theme }) => theme.dark_white};
  @media ${device.laptop} {
    padding: 60px 30px 55px;
  }

  @media ${device.tablet} {
    padding: 30px 15px 30px;
  }
`
const WrapperInfo = styled(Wrapper)`
  margin-top: 0;
`

const WrapperForm = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 208px;
  @media ${device.laptopXS} {
    gap: 100px;
  }
  @media ${device.laptopL} {
    flex-direction: column;
    align-items: center;
  }
`

const Quote = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const Title = styled.h4`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  color: ${({ theme }) => theme.black};
`

const DescQuote = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({ theme }) => theme.black};
`

const WrapperFields = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: flex-end;
  @media ${device.laptopL} {
    flex-direction: column;
  }
`

const CustomInput = styled((props) => <Input {...props} />)`
  @media ${device.laptopL} {
    width: 100%;
  }
`

const CustomButton = styled((props) => <Button {...props} />)`
  @media ${device.laptopL} {
    width: 100%;
  }
`

const CustomField = styled((props) => <Field {...props} />)`
  @media ${device.laptopL} {
    width: 100%;
  }
`

const Form = styled.form`
  @media ${device.laptopL} {
    max-width: 720px;
    width: 100%;
  }
`

const CustomContainer = styled((props) => <Container {...props} />)`
  @media ${device.laptopL} {
    padding: 0;
  }
  @media ${device.mobileXS} {
    padding: 0 !important;
  }
`
