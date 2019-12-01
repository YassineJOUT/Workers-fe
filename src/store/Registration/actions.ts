
import { action } from 'typesafe-actions';
import { ICredentials,USER_SIGNUP,USER_SIGNUP_ERROR,USER_SIGNUP_SUCCESS, SignupActionsType } from './types'
import { history } from '../../utilities/history';
import { Dispatch } from 'redux';
import { userService } from '../../services/users.service'
import { userDetails } from '../types';
// user registration


export const userSignUp = (credentials: ICredentials): SignupActionsType => {
   return action(
    USER_SIGNUP,
    credentials
)}
;
export const userSignUpSuccess = (successMsg: string): SignupActionsType => action(
    USER_SIGNUP_SUCCESS,
    successMsg
);
export const userSignUpError = (errorMsg: string): SignupActionsType => action(
    USER_SIGNUP_ERROR,
    errorMsg
);
export const signin = (user:ICredentials) => {
    return (dispatch: Dispatch<SignupActionsType>) => {
       
        console.log('login Dispatched');
        dispatch(userSignUp(user));
        userService.signUp(user).then(
            u => {
                console.log('Login success dispatched');
                console.log(u);
                dispatch(userSignUpSuccess(u.data.message));
                history.push('/login');
            }
        ).catch(err => {
            console.log('sign up error dispatched');
            console.log(err);
            dispatch(userSignUpError('sign un unsucceeded'));
        });

        }
}