import React from 'react'
import { Formik } from 'formik'
import Image from 'next/image'
import styled, { useTheme } from 'styled-components'

import {
  Button,
  ErrorMessage,
  Field,
  Input,
  Separator,
  Textarea,
  Title,
} from 'src/components'
import { aboutFormSchema } from 'src/schemas'
import { device } from 'src/utils'

import image from '../../../public/images/about/form-image.png'
import formImage from '../../../public/images/about/form-image.png'
import lastForm from '../../../public/images/about/last-form.png'

interface ValuesTypes {
  name: string
  email: string
  phone: string
  response: string
  message: string
}

enum ImageEnum {
  FirstImage = '1',
  SecondImage = '2',
}

interface Props {
  value: string
}

const initialValues: ValuesTypes = {
  name: '',
  email: '',
  phone: '',
  response: '',
  message: '',
}

export const FormMessage = ({ value }: Props) => {
  const { black } = useTheme()

  const handleSubmit = (values: ValuesTypes) => {
    console.log(values)
  }

  return (
    <>
      <Title color={black}>Send Us a Message</Title>
      <Separator />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={aboutFormSchema}>
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
              <TitleForm>Please fill out the form</TitleForm>
              <DescForm>
                We will answer your questions as quickly as we can
              </DescForm>
              <CustomField>
                <Label htmlFor="name">Your Name</Label>
                <CustomInput
                  placeholder="Enter Your Name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <CustomErrorMessage>{errors.name}</CustomErrorMessage>
                )}
              </CustomField>
              <CustomField>
                <Label>Your Email</Label>
                <CustomInput
                  placeholder="Enter Your Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <CustomErrorMessage>{errors.email}</CustomErrorMessage>
                )}
              </CustomField>
              <CustomField>
                <Label>Your Phone Number</Label>
                <CustomInput
                  placeholder="Enter Your Phone Number"
                  type="phone"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                {errors.phone && touched.phone && (
                  <CustomErrorMessage>{errors.phone}</CustomErrorMessage>
                )}
              </CustomField>
              <CustomField>
                <Label>How did you hear about us</Label>
                <CustomInput
                  placeholder="Enter Response"
                  type="text"
                  name="response"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.response}
                />
                {errors.response && touched.response && (
                  <CustomErrorMessage>{errors.response}</CustomErrorMessage>
                )}
              </CustomField>
              <CustomField>
                <Label>Your Message</Label>
                <CustomTextArea
                  placeholder="Enter Message"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                {errors.message && touched.message && (
                  <CustomErrorMessage>{errors.message}</CustomErrorMessage>
                )}
              </CustomField>
              <CustomButton type="submit" disabled={isSubmitting}>
                Submit request
              </CustomButton>
            </WrapperFields>
            {value === ImageEnum.FirstImage && (
              <ImageForm src={image} alt="image" />
            )}
            {value === ImageEnum.SecondImage && (
              <ImageForm src={formImage} alt="image" />
            )}
          </Form>
        )}
      </Formik>
      <LastImage src={lastForm} alt="image" />
    </>
  )
}

const CustomInput = styled((props) => <Input {...props} />)`
  background: ${({ theme }) => theme.white};

  /* @media ${device.laptopL} {
    width: 100%;
  } */
`

const CustomButton = styled((props) => <Button {...props} />)`
  width: 100%;
  /* @media ${device.laptopL} {
    width: 100%;
  } */
`

const CustomField = styled((props) => <Field {...props} />)`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  /* @media ${device.laptopL} {
    width: 100%;
  } */
`

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  /* @media ${device.laptopL} {
    max-width: 720px;
    width: 100%;
  } */
`

const WrapperFields = styled.div`
  width: 100%;
`

const Label = styled.label`
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: ${({ theme }) => theme.black};
  padding-bottom: 7px;
`

const CustomTextArea = styled((props) => <Textarea {...props} />)`
  background: ${({ theme }) => theme.white};
`

const TitleForm = styled.p`
  font-weight: 700;
  font-size: 25px;
  line-height: 130%;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.black};
`

const DescForm = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: ${({ theme }) => theme.black};
  margin-bottom: 23px;
`

const CustomErrorMessage = styled((props) => <ErrorMessage {...props} />)`
  bottom: -20px;
`

const ImageForm = styled(Image)`
  @media ${device.laptopL} {
    display: none;
  }
`
const LastImage = styled(Image)`
  width: 100%;
  height: auto;
  margin: 45px 0 0px;
  display: none;
  @media ${device.laptopL} {
    display: block;
  }
`
