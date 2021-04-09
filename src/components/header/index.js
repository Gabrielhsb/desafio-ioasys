import React from 'react';
import "./styles.css";
import logo from "./assets/logo.png";
import { useSelector, useDispatch } from 'react-redux';
import logoutService from '../../services/logout.service';


export default function Header({user}) {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    console.log(isAuthenticated);
    function logout()  {
        isAuthenticated && dispatch(logoutService());
    }
    return(
        <div className="header">
            <div className="titulo">
                <img src={logo} alt="logo ioasys"/>
                <h1 className="title">Books</h1>
            </div>
            <div className="user">
                <p>Bem vindo, {user.name}!</p>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}