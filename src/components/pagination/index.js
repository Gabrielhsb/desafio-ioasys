import React from 'react';
import "./styles.css";
const Pagination = ({ booksPerPage, totalBooks, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalBooks/booksPerPage); i++){
        pageNumbers.push(i);
    }


    return (
        
        <nav className="container">
            <div className="pagination-div">
                <ul className="pagination">
                    {pageNumbers.map(number =>(
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number) }  className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            
        </nav>
    )
}

export default Pagination;