import React from 'react';
import "./styles.css";

export default function Card({book, loading}) {
    if(loading) {
        return<h2>Loading...</h2>
    }
    return(
        <div className="card row">
            <div className="card-image ">
                <img src={book.imageUrl} className="card-image-left" alt={book.title}/>
                <div className="card-body ">
                    <h5 className="title">{book.title}</h5>
                    <div className="card-autors">
                        {book.authors.map((book, index) => <p className="card-autor">{book}</p>)}
                     </div> 
                    <p className="card-page">{book.pageCount} páginas</p>
                    <p className="card-editor"> Editora {book.publisher}</p>
                    <p className="card-date">Publicado em {book.published}</p>
                </div>
            </div>
        </div>
     
    );
}