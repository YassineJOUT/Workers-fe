import { action } from 'typesafe-actions';
import { RigisterActionTypes, UserLogin, userDetails } from './types'

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
