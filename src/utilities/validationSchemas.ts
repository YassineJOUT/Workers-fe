import * as Yup from 'yup'

const validEmail = Yup.string()
.email("Must be a valid email address")
.max(255,"Too long for an email")
.required("Email is required");

const validPassword = Yup.string()
.min(8,"Password must have at least 8 caracters")
.max(255,"Too long password")
.required("Password is required");

const validConfirmationCode = Yup.number()
.min(4,"Corfirmation code is a 4 digits number")
.max(4,"Confirmation code must be a 4 digits number")
.positive("Confirmation code must be positive");

const validUsername = Yup.string()
.min(3,"Username must have more than 3 caracters")
.max(50,"Username must have less than 50 caracters")
.required("Username is required");

export const loginValidationSchema = Yup.object().shape({
    email: validEmail,
    password: validPassword
})

export const PassordForgottenValidationSchema = Yup.object().shape({
    email: validEmail,
    
})

export const confirmationCodeFormSchema = Yup.object().shape(
    {
        confirmationCode: validConfirmationCode
    }
)
export const resetPasswordSchema = Yup.object().shape({
    password1: validPassword,
    password: validPassword
})

export const registrationSchema = Yup.object().shape({
    username: validUsername,
    email: validEmail,
    password: validPassword

})