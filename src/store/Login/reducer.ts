import { Reducer, AnyAction } from "redux";
import {userDetailsState,LoginActionTypes} from '../types'
import { createReducer} from '../../utilities/ReducerHelper'
const initialState: userDetailsState = {
    user:{
        username: "",
        email: "",
        password: ""},
    
    connected: false
}

//Login
const doLogin = (state = initialState, action: AnyAction) => {
    return {...state,user: action.payload };
}

const loginSuccess = (state = initialState, action: AnyAction) => {
    return { ...state, connected: true, user: action.payload };
}

const loginFailed = (state = initialState, action: AnyAction) => {
    return { ...state, connected: false };
}

const LOGIN_HANDLERS = {
    [LoginActionTypes.USER_LOGIN]: doLogin,
    [LoginActionTypes.USER_LOGIN_SUCCESS]: loginSuccess,
    [LoginActionTypes.USER_LOGIN_ERROR]: loginFailed,
}



const LoginReducer: Reducer<userDetailsState> = createReducer(initialState, LOGIN_HANDLERS);
export { LoginReducer };