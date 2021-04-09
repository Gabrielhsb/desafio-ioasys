import React from 'react';

import "./styles.css";
import logo from "./assets/logo.png";


export default function Header({user}) {
    return(
        <div className="header">
            <div className="titulo">
                <img src={logo} alt="logo ioasys"/>
                <h1 className="title">Books</h1>
            </div>
            <div className="user">
                <p>Bem vindo, {user.name}!</p>
                <button>Logout</button>
            </div>
        </div>
    )
}