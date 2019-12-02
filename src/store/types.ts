export enum LoginActionTypes  {
    USER_LOGIN = 'USER_LOGIN',
    USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
    USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'
}
export enum RigisterActionTypes  {
    USER_SIGNUP = 'USER_SIGNUP',
    USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS',
    USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR'
}
export enum PasswordResetActionTypes  {
    USER_PWD_RESET = 'USER_PWD_RESET',
    PWD_RESET_SUCCESS = 'PWD_RESET_SUCCESS',
    PWD_RESET_ERROR = 'PWD_RESET_ERROR'
}
export enum PasswordChnageActionTypes  {
    USER_PWD_CHANGE = 'USER_PWD_CHANGE',
    PWD_CHANGE_SUCCESS = 'PWD_CHANGE_SUCCESS',
    PWD_CHANGE_ERROR = 'PWD_CHANGE_ERROR'
}

export interface loginState{
    userInfo: userDetails,
    isLoggedIn: boolean,
    token: string,
    error: string
}

export interface registerState{
    isRegistering: boolean,
    error: string
}

export interface PasswordForgottenState{
    email:string,
    successMessage: string,
    isLoading: boolean,
    error: string
}

export interface UserLogin {
    email? : string,
    password? : string
}

export interface userDetails {
    id: string,
    username : string,
    email : string,
    password? : string,
    image? : string,
    age? : number
}

export interface userDetailsState {
    user:{username : string,
    email : string,
    password : string,
    image? : string,
    age? : number},
    connected: boolean
    
}