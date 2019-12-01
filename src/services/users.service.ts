import axios from 'axios'
import { ICredentials } from '../store/Registration/types';
const login = (email: string, password: string) => {
    let params = new URLSearchParams();
    params.append('email', email );
    params.append('password', password );
    return axios.post('http://localhost:3005/users/signin', params, { headers: { "Content-Type": "application/x-www-form-urlencoded" } });
};

const signUp = (user:ICredentials) => {
    let params = new URLSearchParams();
    params.append('email', user.email );
    params.append('username', user.username );
    params.append('password', user.password === undefined ? '' : user.password  );
    params.append('age', user.age === undefined ? '0' : user.age.toString()  );
    return axios.post('http://localhost:3005/users/signup', params, { headers: { "Content-Type": "application/x-www-form-urlencoded" } });
};

export const userService = {
    login,
    signUp,
};
