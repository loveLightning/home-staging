import * as yup from 'yup'

import { emailRegex } from './regexps'

export const footerSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40)
    .required('Name is a required field'),
  email: yup
    .string()
    .matches(emailRegex, 'Invalid email')
    .required('Email is a required field'),
  phone: yup.string().max(20).required('Phone is a required field'),
})
