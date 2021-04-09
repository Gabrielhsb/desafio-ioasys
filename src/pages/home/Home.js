
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Home.css";
import Card from '../../components/card/index';
import Header from '../../components/header/index';
import { getAllBooks } from '../../store/fetchActions';
import Pagination from "../../components/pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {

	const books = useSelector((state) => state.books);
	const dispatch = useDispatch();
	const [loadin, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [booksPerPage] = useState(12);


	const indexOfLastPost = currentPage * booksPerPage;
	const indexOfFirstPost = indexOfLastPost - booksPerPage;
	const currentBook = books.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	useEffect(() => {
		dispatch(getAllBooks(localStorage.getItem("token")));
		setLoading(false);
	}, [dispatch]);
	
	let user=  {
		name: "Guilherme"
	};



	return (
			<div class="rspace ">
				<Header user={user}/>
				<div class="row" >
				<div className="container">
						<div class="row">
							{currentBook.map((book, index) => <div class="col-3 mb-3 "><Card key={index} book={book} loading={loadin} /></div>)}
							<Pagination booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate}/>
						</div>
				</div>
				</div>
			</div>
	);
}
