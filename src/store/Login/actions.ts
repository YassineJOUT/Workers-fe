import { action } from 'typesafe-actions';
import { ICredentials,USER_LOGIN,USER_LOGIN_ERROR,USER_LOGIN_SUCCESS,LoginActionsType } from './types'
import { history } from '../../utilities/history';
import { Dispatch } from 'redux';
import { userService } from '../../services/users.service'
import { userDetails } from '../types';


// user login
export const userLogin = (credentials: ICredentials): LoginActionsType => {
   return action(
    USER_LOGIN,
    credentials
)}
;
export const userLoginSuccess = (user: userDetails,token: string): LoginActionsType => action(
    USER_LOGIN_SUCCESS,
    {user,token}
);
export const userLoginError = (errorMsg: string): LoginActionsType => action(
    USER_LOGIN_ERROR,
    errorMsg
);

export const login = (email: string, password: string) => {
    return (dispatch: Dispatch<LoginActionsType>) => {
        const user: ICredentials = {
            email,
            password
        }
        console.log('login Dispatched');
        dispatch(userLogin(user));
        userService.login(email,password).then(
            u => {
                console.log('Login success dispatched');
                console.log(u);
                dispatch(userLoginSuccess({email: u.data.user.email,username: u.data.user.username,id: u.data.user.id},u.data.token));
                history.push('/profile');
            }
        ).catch(err => {
            console.log('login error dispatched');
            console.log(err);
            dispatch(userLoginError('Login was unsucceeded'));
        });

        }
}