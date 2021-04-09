
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Home.css";
import Card from '../../components/card/index';
import Header from '../../components/header/index';
import { getAllBooks } from '../../store/fetchActions';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {

	const books = useSelector((state) => state.books);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllBooks(localStorage.getItem("token")));
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
							{books.map((book, index) => <div class="col-3 mb-3 "><Card key={index} book={book} /></div>)}
						</div>
				</div>
				</div>
			</div>
	);
}
