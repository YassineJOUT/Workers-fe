import { action } from 'typesafe-actions';
import { PasswordChnageActionTypes, UserLogin, userDetails } from '../types'

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



