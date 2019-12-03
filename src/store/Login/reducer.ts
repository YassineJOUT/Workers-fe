import { Reducer, AnyAction } from "redux";
import {loginState} from '../types'
import { USER_LOGIN, USER_LOGIN_ERROR,USER_LOGIN_SUCCESS} from './types'
import { createReducer} from '../../utilities/ReducerHelper'
const initialState: loginState = {
    userInfo: {
        email: '',
        id: '',
        username: ''
    },
    error: '',
    isLoggedIn: false,
    token: '',
    isLoading: false
}

//Login
const doLogin = (state = initialState, action: AnyAction) => {
    return {...state,isLoading: true};
}

const loginSuccess = (state = initialState, action: AnyAction) => {
    return { ...state, isLoggedIn: true, userInfo: action.payload.user,token: action.payload.token, isLoading: false, error: '' };
}

const loginFailed = (state = initialState, action: AnyAction) => {
    console.log('action');
    console.log(action);
    return { ...state, isLoggedIn: false, error: action.payload, isLoading: false };
}

const LOGIN_HANDLERS = {
    [USER_LOGIN]: doLogin,
    [USER_LOGIN_SUCCESS]: loginSuccess,
    [USER_LOGIN_ERROR]: loginFailed,
}



const LoginReducer: Reducer<loginState> = createReducer(initialState, LOGIN_HANDLERS);
export { LoginReducer };