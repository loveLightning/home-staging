import * as yup from 'yup'

import { emailRegex } from './regexps'

export const footerEmailSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, 'Invalid email')
    .required('Email is a required field'),
})
