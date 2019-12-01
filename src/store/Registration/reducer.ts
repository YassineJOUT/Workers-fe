import { Reducer, AnyAction } from "redux";
import { RigisterActionTypes, registerState} from '../types'
import { createReducer} from '../../utilities/ReducerHelper'

const initialState: registerState = {
    isRegistering: false,
    error: ''
   
}
// Register

const doRegister = (state = initialState, action: AnyAction) => {
    return {...state,isRegistering: true};
}

const registerSuccess = (state = initialState, action: AnyAction) => {
    return { ...state, isRegistering: false };
}

const registerFailed = (state = initialState, action: AnyAction) => {
    return { ...state, isRegistering: false, error: action.payload };
}

const REGISTER_HANDLERS = {
    [RigisterActionTypes.USER_SIGNUP]: doRegister,
    [RigisterActionTypes.USER_SIGNUP_SUCCESS]: registerSuccess,
    [RigisterActionTypes.USER_SIGNUP_ERROR]: registerFailed,
}

// 


const SignupReducer: Reducer<registerState> = createReducer(initialState, REGISTER_HANDLERS);
export {  SignupReducer  };