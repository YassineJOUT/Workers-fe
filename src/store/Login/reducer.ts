import { Reducer, AnyAction } from "redux";
import {loginState,LoginActionTypes} from '../types'
import { createReducer} from '../../utilities/ReducerHelper'
const initialState: loginState = {
    userInfo: {
        email: '',
        id: '',
        username: ''
    },
    error: '',
    isLoggedIn: false,
    token: ''
}

//Login
const doLogin = (state = initialState, action: AnyAction) => {
    return {...state};
}

const loginSuccess = (state = initialState, action: AnyAction) => {
    console.log('reducer');
    console.log({ ...state, isLoggedIn: true, userInfo: action.payload.user,token: action.payload.token });
    return { ...state, isLoggedIn: true, userInfo: action.payload.user,token: action.payload.token };
}

const loginFailed = (state = initialState, action: AnyAction) => {
    return { ...state, isLoggedIn: false, error: action.error };
}

const LOGIN_HANDLERS = {
    [LoginActionTypes.USER_LOGIN]: doLogin,
    [LoginActionTypes.USER_LOGIN_SUCCESS]: loginSuccess,
    [LoginActionTypes.USER_LOGIN_ERROR]: loginFailed,
}



const LoginReducer: Reducer<loginState> = createReducer(initialState, LOGIN_HANDLERS);
export { LoginReducer };