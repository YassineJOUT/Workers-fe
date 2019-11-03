import { action } from 'typesafe-actions';
import { LoginActionTypes,RigisterActionTypes,
         PasswordChnageActionTypes,PasswordResetActionTypes,
         UserLogin, userDetails } from './types'


// user login
export const userLogin = (user: UserLogin) => action(
    LoginActionTypes.USER_LOGIN,
    user
);


export const userLoginSuccess = (details: userDetails) => action(
    LoginActionTypes.USER_LOGIN_SUCCESS,
    details
);


export const userLoginError = (errorMsg: string) => action(
    LoginActionTypes.USER_LOGIN_ERROR,
    errorMsg
);
// user registration

export const userSignUp = (user: UserLogin) => action(
    RigisterActionTypes.USER_SIGNUP,
    user
);


export const userSignUpSuccess = (details: userDetails) => action(
    RigisterActionTypes.USER_SIGNUP_SUCCESS,
    details
);


export const userSignUpError = (errorMsg: string) => action(
    RigisterActionTypes.USER_SIGNUP_ERROR,
    errorMsg
);

// change password 

export const ChangePassword = (user: UserLogin) => action(
    PasswordChnageActionTypes.USER_PWD_CHANGE,
    user
);


export const ChangePasswordSuccess = (details: userDetails) => action(
    PasswordChnageActionTypes.PWD_CHANGE_SUCCESS,
    details
);


export const ChangePasswordError = (errorMsg: string) => action(
    PasswordChnageActionTypes.PWD_CHANGE_ERROR,
    errorMsg
);

// reset password

export const resetPassword = (user: UserLogin) => action(
    PasswordResetActionTypes.USER_PWD_RESET,
    user
);


export const resetPasswordSuccess = (details: userDetails) => action(
    PasswordResetActionTypes.PWD_RESET_SUCCESS,
    details
);


export const resetPasswordError = (errorMsg: string) => action(
    PasswordResetActionTypes.PWD_RESET_ERROR,
    errorMsg
);


