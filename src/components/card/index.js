import React from 'react';

import "./styles.css";


export default function card({book}) {
    return(
        <div className="col-sm-3 mt-3 mb-3">
            <div className="card">
                <img src={book.imageUrl} className="card-image-left" alt={book.title}/>
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-autor">{book.authors[0]}</p> 
                    <p className="card-page">{book.pageCount}</p>
                    <p className="card-editor">{book.publisher}</p>
                    <p className="card-date">{book.published}</p>
                </div>
            </div>
        </div>
    );
}