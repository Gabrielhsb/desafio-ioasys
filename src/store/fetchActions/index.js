import { login } from '../ducks/auth';
import api from "../../services/api"
import { addBooks } from '../ducks/books';
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

export const getAllBooks = () => {
	return (dispatch) => {
		api
			.get('/books')
			.then((res) => {
				dispatch(addBooks(res.data));
			})
			.catch(console.log);
	};
};