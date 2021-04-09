import React from 'react';

import "./styles.css";


export default function Book({book}) {
    return(
  
        <div className="page-card row">
            <div className="page-card-image ">
                <img src={book.imageUrl} className="card-image-left" alt={book.title}/>
                <div className="page-card-body ">
                    <h1 className="title">{book.title}</h1>
                    <div className="page-card-autors">
                        {book.authors.map((book, index) => <p key={index} className="card-autor">{book}</p>)}
                     </div> 
                    <h5 className="page-card-sub">INFORMAÇÕES</h5>
                <div> 
                    <p><b>Páginas</b> {book.pageCount}</p>
                    <p><b>Editora</b>{book.publisher}</p>
                    <p><b>Publicação</b>{book.published}</p>
                    <p><b>Idioma</b>{book.language}</p>
                    <p><b>Titulo Original</b>{book.title}</p>
                    <p><b>ISBN-10</b>{book.isbn10}</p>
                    <p><b>ISBN-13</b>{book.isbn13}</p>
                </div>
                   
                </div>
            </div>
        </div>
     
    );
}