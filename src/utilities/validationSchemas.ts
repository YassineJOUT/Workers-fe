import * as Yup from 'yup'

const validEmailSchema = Yup.string()
.email("Must be a valid email address")
.max(255,"Too long for an email")
.required("Email is required");

const validPasswordSchema = Yup.string()
.min(8,"Password must have at least 8 caracters")
.max(255,"Too long password")
.required("Password is required");

const validConfirmationCode = Yup.number()
.min(4,"Corfirmation code is a 4 digits number")
.max(4,"Confirmation code must be a 4 digits number")
.positive("Confirmation code must be positive");

export const loginValidationSchema = Yup.object().shape({
    email: validEmailSchema,
    password: validPasswordSchema
})

export const PassordForgottenValidationSchema = Yup.object().shape({
    email: validEmailSchema,
    confirmationCode: validConfirmationCode
})