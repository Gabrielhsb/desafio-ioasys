import api from "../../services/api"
import { login } from '../ducks/auth';
import { addBooks } from "../ducks/books"
const baseUrl = "https://books.ioasys.com.br/api/v1/auth/sign-in"


export const authLogin = (user) => {
    return (dispatch) => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        }).then(res => {
            localStorage.setItem('token', res.headers.get('authorization'));
            window.location.pathname = '/home';
        })
            .catch(console.log);
    }
};

export const getAllBooks = (access_token) => {
    return (dispatch) => {
        api
            .get('/books?page=1&amount=50', {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })
            .then((res) => {
                dispatch(addBooks(res.data.data));
            })
            .catch(console.log);
    };
};