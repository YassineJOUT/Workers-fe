import { Reducer, AnyAction } from "redux";
import {userDetailsState,LoginActionTypes} from '../types';
import { createReducer} from '../../utilities/ReducerHelper';

const initialState: userDetailsState = {
    user:{
        username: "",
        email: "",
        password: ""},
    
    connected: false
    
}

const doPasswordChange = (state = initialState, action: AnyAction) => {
    return {...state,user: action.payload };
}

const passwordChangeSuccess = (state = initialState, action: AnyAction) => {
    return { ...state, connected: true, user: action.payload };
}

const passwordChangeFailed = (state = initialState, action: AnyAction) => {
    return { ...state, connected: false };
}

const PWDCHANGE_HANDLERS = {
    [LoginActionTypes.USER_LOGIN]: doPasswordChange,
    [LoginActionTypes.USER_LOGIN_SUCCESS]: passwordChangeSuccess,
    [LoginActionTypes.USER_LOGIN_ERROR]: passwordChangeFailed,
}





const PasswordChangereducer: Reducer<userDetailsState> = createReducer(initialState, PWDCHANGE_HANDLERS);
export { PasswordChangereducer };