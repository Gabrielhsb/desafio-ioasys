
import logo from './assets/Logo.png';
import "./Login.css";
import { useDispatch } from 'react-redux';
import { authLogin } from '../../store/fetchActions';
import React, { useState, useEffect } from 'react';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const dispatch = useDispatch();
    function changeForm(e) {
        const { name, value } = e.target

        setForm({ ...form, [name]: value })
    };

    function submitForm(e){
        e.preventDefault();
        setForm({email:'', password:''});
        dispatch(authLogin(form));
    };

    useEffect(() => {
        document.body.className = 'login-body';
    }, []);

    return (
      
            <div className="login_div">
            <form 
            onSubmit={submitForm}
            className="login_form">
                <img src={logo} alt="Logo da ioasys" />
                <h1>Book</h1>
                <input className="email" type="email" name="email" onChange={changeForm} value={form.email}/>
                <span class="email-label">Email</span>
                <input className="password" type="password" name="password" onChange={changeForm} value={form.password}/>
                <span class="password-label">Senha</span>
                <button type="submit" className="submit_btn">Entrar</button>
            </form>
        </div>
       
    );


}


export default Login;