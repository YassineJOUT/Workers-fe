import axios from 'axios'

const login = (email: string, password: string) => {
    let params = new URLSearchParams();
    params.append('email', email );
    params.append('password', password );
    return axios.post('http://localhost:3005/users/signin', params, { headers: { "Content-Type": "application/x-www-form-urlencoded" } });
};




export const userService = {
    login
};
