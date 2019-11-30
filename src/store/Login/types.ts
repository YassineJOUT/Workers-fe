import { userDetails } from "../types";

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export interface ICredentials{
    email: string,
    password: string
}

export interface LoginState {
    connected: boolean
}


interface UserLoginAction {
    type: typeof USER_LOGIN
    payload: ICredentials
}
  
interface UserLoginSuccessAction {
    type: typeof USER_LOGIN_SUCCESS
    payload: userDetails
}
  
interface UserLoginErrorAction {
    type: typeof USER_LOGIN_ERROR
    payload: string
}
  

export type  LoginActionsType = UserLoginAction | UserLoginSuccessAction | UserLoginErrorAction;



