import { action } from 'typesafe-actions';
import { LoginActionTypes,
         UserLogin, userDetails } from '../types'


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