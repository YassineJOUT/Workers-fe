import { Reducer, AnyAction } from "redux";
import {userDetailsState,LoginActionTypes} from '../types';
import { createReducer} from '../../utilities/ReducerHelper';

const initialState: userDetailsState = {
    details: {
        username: "",
        email: "",
        password: ""
    },
    connected: false,
    error: ""
}



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




const PasswordChangereducer: Reducer<userDetailsState> = createReducer(initialState, PWDCHANGE_HANDLERS);
export { PasswordChangereducer };