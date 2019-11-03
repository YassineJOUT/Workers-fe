import { Reducer, AnyAction } from "redux";
import {userDetailsState,LoginActionTypes} from './types'
import { createReducer} from '../utilities/ReducerHelper'
const initialState: userDetailsState = {
    details: {
        username: "",
        email: "",
        password: ""
    },
    connected: false,
    error: ""
}

//Login
const doLogin = (state = initialState, action: AnyAction) => {
    return {...state,details: action.payload };
}

const loginSuccess = (state = initialState, action: AnyAction) => {
    return { ...state, connected: true, details: action.payload };
}

const loginFailed = (state = initialState, action: AnyAction) => {
    return { ...state, connected: false, error: action.payload };
}

const LOGIN_HANDLERS = {
    [LoginActionTypes.USER_LOGIN]: doLogin,
    [LoginActionTypes.USER_LOGIN_SUCCESS]: loginSuccess,
    [LoginActionTypes.USER_LOGIN_ERROR]: loginFailed,
}

// Register

const doRegister = (state = initialState, action: AnyAction) => {
    return {...state,details: action.payload };
}

const registerSuccess = (state = initialState, action: AnyAction) => {
    return { ...state, connected: true, details: action.payload };
}

const registerFailed = (state = initialState, action: AnyAction) => {
    return { ...state, connected: false, error: action.payload };
}

const REGISTER_HANDLERS = {
    [LoginActionTypes.USER_LOGIN]: doRegister,
    [LoginActionTypes.USER_LOGIN_SUCCESS]: registerSuccess,
    [LoginActionTypes.USER_LOGIN_ERROR]: registerFailed,
}
// Change password

const doPasswordChange = (state = initialState, action: AnyAction) => {
    return {...state,details: action.payload };
}

const passwordChangeSuccess = (state = initialState, action: AnyAction) => {
    return { ...state, connected: true, details: action.payload };
}

const passwordChangeFailed = (state = initialState, action: AnyAction) => {
    return { ...state, connected: false, error: action.payload };
}

const PWDCHANGE_HANDLERS = {
    [LoginActionTypes.USER_LOGIN]: doPasswordChange,
    [LoginActionTypes.USER_LOGIN_SUCCESS]: passwordChangeSuccess,
    [LoginActionTypes.USER_LOGIN_ERROR]: passwordChangeFailed,
}
// Password forgotten

const doPasswordForgotten = (state = initialState, action: AnyAction) => {
    return {...state,details: action.payload };
}

const PasswordForgottenSuccess = (state = initialState, action: AnyAction) => {
    return { ...state, connected: true, details: action.payload };
}

const PasswordForgottenFailed = (state = initialState, action: AnyAction) => {
    return { ...state, connected: false, error: action.payload };
}

const PWDFORGOTTEN_HANDLERS = {
    [LoginActionTypes.USER_LOGIN]: doPasswordForgotten,
    [LoginActionTypes.USER_LOGIN_SUCCESS]: PasswordForgottenSuccess,
    [LoginActionTypes.USER_LOGIN_ERROR]: PasswordForgottenFailed,
}
// 


const LoginReducer: Reducer<userDetailsState> = createReducer(initialState, LOGIN_HANDLERS);
const SignupReducer: Reducer<userDetailsState> = createReducer(initialState, REGISTER_HANDLERS);
const PasswordChangereducer: Reducer<userDetailsState> = createReducer(initialState, PWDCHANGE_HANDLERS);
const PasswordResetreducer: Reducer<userDetailsState> = createReducer(initialState, PWDFORGOTTEN_HANDLERS);
export { 
    LoginReducer,
    SignupReducer,
    PasswordChangereducer,
    PasswordResetreducer
 };