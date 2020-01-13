import { Reducer, AnyAction } from "redux";
import { registerState } from '../types'
import { USER_SIGNUP, USER_SIGNUP_ERROR, USER_SIGNUP_SUCCESS} from './types'
import { createReducer} from '../../utilities/ReducerHelper'

const initialState: registerState = {
    isLoading: false,
    error: ''
   
}
// Register

const doRegister = (state = initialState, action: AnyAction) => {
    return {...state,isLoading: true};
}

const registerSuccess = (state = initialState, action: AnyAction) => {
    return { ...state, isLoading: false };
}

const registerFailed = (state = initialState, action: AnyAction) => {
    return { ...state, isLoading: false, error: action.payload };
}

const REGISTER_HANDLERS = {
    [USER_SIGNUP]: doRegister,
    [USER_SIGNUP_SUCCESS]: registerSuccess,
    [USER_SIGNUP_ERROR]: registerFailed,
}

// 


const SignupReducer: Reducer<registerState> = createReducer(initialState, REGISTER_HANDLERS);
export {  SignupReducer  };