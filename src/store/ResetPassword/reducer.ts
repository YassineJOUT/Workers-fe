import { Reducer, AnyAction } from "redux";
import { PWD_RESET_ERROR,PWD_RESET_SUCCESS,USER_PWD_RESET} from './types';
import { createReducer} from '../../utilities/ReducerHelper';
import { PasswordResetState } from '../types'

const initialState: PasswordResetState = {
    isLoading: false,
    error: '',
    successMessage: ''
}

const doPasswordReset = (state = initialState, action: AnyAction) => {
    return {...state,isLoading: true };
}

const passwordResetSuccess = (state = initialState, action: AnyAction) => {
    return { ...state, isLoading: false, successMessage: action.payload,error: '' };
}

const passwordResetFailed = (state = initialState, action: AnyAction) => {
    return { ...state, isLoading: false, error: action.payload, successMessage: '' };
}

const PWDCHANGE_HANDLERS = {
    [USER_PWD_RESET]: doPasswordReset,
    [PWD_RESET_SUCCESS]: passwordResetSuccess,
    [PWD_RESET_ERROR]: passwordResetFailed,
}





const resetPasswordReducer: Reducer<PasswordResetState> = createReducer(initialState, PWDCHANGE_HANDLERS);
export { resetPasswordReducer };