import { login } from '../ducks/auth';

const baseUrl = "https://books.ioasys.com.br/api/v1/auth/sign-in"

export const authLogin = (user) => {
    return (dispatch) => {
         fetch(baseUrl, {
            method: 'POST',
            headers:{
               "Content-Type":"application/json",
               "Accept":"application/json"
            },
            body:JSON.stringify(user)
        }).then(res => {
            localStorage.setItem('token', res.headers.get('authorization'));
            dispatch(login());
            window.location.pathname = '/home';
        })
          .catch(console.log);
    }
}