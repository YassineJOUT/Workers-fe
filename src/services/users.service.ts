import axios from 'axios'
import { ICredentials } from '../store/Registration/types';

const endPoint: string = 'http://localhost:3005/users/';
const headersOptions: {} = { headers: { "Content-Type": "application/x-www-form-urlencoded" } };
 
const login = (email: string, password: string) => {
    let params = new URLSearchParams();
    params.append('email', email );
    params.append('password', password );
    return axios.post(endPoint+'signin', params, headersOptions);
};

const signUp = (user:ICredentials) => {
    let params = new URLSearchParams();
    params.append('email', user.email );
    params.append('username', user.username );
    params.append('password', user.password === undefined ? '' : user.password  );
    params.append('age', user.age === undefined ? '0' : user.age.toString()  );
    return axios.post('http://localhost:3005/users/signup', params);
};



const passwordForgotten = (email: string,confirmationCoode: string = '') => {
    let params = new URLSearchParams();
    params.append('email', email );
    params.append('confirmationCode',confirmationCoode);
    return axios.post(endPoint+'passwordForgotten', params,headersOptions);
} 


const resetPassword = (email: string,confirmationCoode: string, password: string) => {

    console.log('resetPassword');
    console.log(email);
    console.log(confirmationCoode);
    console.log(password);
    let params = new URLSearchParams();
    params.append('email', email );
    params.append('confirmationCode',confirmationCoode);
    params.append('password',password);


    return axios.post(endPoint+'resetPassword', params, headersOptions);
} 


export const userService = {
    login,
    signUp,
    passwordForgotten,
    resetPassword
};