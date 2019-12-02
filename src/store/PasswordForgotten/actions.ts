import { action } from 'typesafe-actions';
import { PASSWORD_FORGOTTEN,PASSWORD_FORGOTTEN_ERROR,PASSWORD_FORGOTTEN_SUCCESS,PasswordForgottenActionsType } from './types'
import { Dispatch } from 'redux';
import { userService } from '../../services/users.service'
import { history } from '../../utilities/history';

// user login
export const PasswordForgotten = (email: string): PasswordForgottenActionsType => {
 
   return action(
    PASSWORD_FORGOTTEN,
    email
)};

export const PasswordForgottenSuccess = (successMessage: string,confirmationCode: string = ''): PasswordForgottenActionsType => action(
    PASSWORD_FORGOTTEN_SUCCESS,
    {
        successMessage,
        confirmationCode
    }
    
);
export const PasswordForgottenError = (errorMsg: string): PasswordForgottenActionsType => action(
    PASSWORD_FORGOTTEN_ERROR,
    errorMsg,
);
export const passwordForgotten = (email: string,confirmationCode: string = '') => {
   
    return (dispatch: Dispatch<PasswordForgottenActionsType>) => {
        console.log('login Dispatched');
        dispatch(PasswordForgotten(email));
        userService.passwordForgotten(email,confirmationCode).then(
            u => {
                console.log('received data');
                console.log(u.data);
                if(u.data.match === false) dispatch(PasswordForgottenError('Wrong Confirmation code'));
                else if(u.data.match === true) {
                    dispatch(PasswordForgottenSuccess(u.data.message,confirmationCode));
                    history.push('reset-password');
                    }
                else 
                dispatch(PasswordForgottenSuccess(u.data.message));
            }
        ).catch(err => {
            dispatch(PasswordForgottenError('Something went wrong'));
        });
    }
}