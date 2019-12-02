import { Reducer, AnyAction } from "redux";
import {PasswordForgottenState} from '../types'
import { PASSWORD_FORGOTTEN,PASSWORD_FORGOTTEN_ERROR,PASSWORD_FORGOTTEN_SUCCESS} from './types'
import { createReducer} from '../../utilities/ReducerHelper'
const initialState: PasswordForgottenState = {
    email: '',
    successMessage: '',
    isLoading: false,
    error: '',
    confirmationCode: '',
}

//Login
const passwordForgotten = (state = initialState, action: AnyAction) => {
    return {...state, isLoading: true, email: action.payload};
}

const passwordForgottenSuccess = (state = initialState, action: AnyAction) => {
    return { ...state, isLoading: false, successMessage: action.payload.successMessage, confirmationCode: action.payload.confirmationCode, error: ''};
}

const passwordForgottenFailed = (state = initialState, action: AnyAction) => {
    return { ...state, isLoading: false, error: action.payload, successMessage: '' };
}

const PQSSWORD_FORGOTTEN_HANDLERS = {
    [PASSWORD_FORGOTTEN]: passwordForgotten,
    [PASSWORD_FORGOTTEN_SUCCESS]: passwordForgottenSuccess,
    [PASSWORD_FORGOTTEN_ERROR]: passwordForgottenFailed,
}



const PasswordForgottenReducer: Reducer<PasswordForgottenState> = createReducer(initialState, PQSSWORD_FORGOTTEN_HANDLERS);
export { PasswordForgottenReducer };