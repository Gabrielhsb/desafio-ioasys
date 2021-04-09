import React from 'react';

import "./styles.css";


export default function Card({book}) {
    return(
        <div className="card">
            <div className="card-image">
                <img src={book.imageUrl} className="card-image-left" alt={book.title}/>
                <div className="card-body">
                        
                    <h5 className="title">{book.title}</h5>
                        {book.authors.map((book, index) => <p className="card-autor">{book}</p>)}
                    <p className="card-page">{book.pageCount} páginas</p>
                    <p className="card-editor"> Editora {book.publisher}</p>
                    <p className="card-date">Publicado em {book.published}</p>
                </div>
            </div>
        </div>
    );
}