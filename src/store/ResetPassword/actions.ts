import { action } from 'typesafe-actions';
import { PWD_RESET_ERROR,USER_PWD_RESET,PwdResetActionsType,PWD_RESET_SUCCESS } from './types'
import { Dispatch } from 'redux';
import { userService } from '../../services/users.service';
// change password 

export const ChangePassword = () : PwdResetActionsType => action(
    USER_PWD_RESET
);


export const ChangePasswordSuccess = (successMessage: string): PwdResetActionsType => action(
    PWD_RESET_SUCCESS,
    successMessage
);


export const ChangePasswordError = (error: string): PwdResetActionsType => action(
    PWD_RESET_ERROR,
    error
);



export const resetPassword = (email: string,confirmationCode: string, password: string) => {
   
    return (dispatch: Dispatch<PwdResetActionsType>) => {
        console.log('login Dispatched');
        dispatch(ChangePassword());
        userService.resetPassword(email,confirmationCode,password).then(
            u => {
                dispatch(ChangePasswordSuccess(u.data.message));
            }
        ).catch(err => {
            dispatch(ChangePasswordError('Something went wrong'));
        });
    }
}