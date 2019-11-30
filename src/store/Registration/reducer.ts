import { Reducer, AnyAction } from "redux";
import {userDetailsState,RigisterActionTypes} from '../types'
import { createReducer} from '../../utilities/ReducerHelper'

const initialState: userDetailsState = {
    
    user:{
        username: "",
        email: "",
        password: ""},
    
    connected: false
   
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
    [RigisterActionTypes.USER_SIGNUP]: doRegister,
    [RigisterActionTypes.USER_SIGNUP_SUCCESS]: registerSuccess,
    [RigisterActionTypes.USER_SIGNUP_ERROR]: registerFailed,
}

// 


const SignupReducer: Reducer<userDetailsState> = createReducer(initialState, REGISTER_HANDLERS);
export {  SignupReducer  };