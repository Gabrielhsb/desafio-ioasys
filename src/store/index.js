import { configureStore } from '@reduxjs/toolkit';


import authReducer from './ducks/auth';
import booksReducer from './ducks/books';

export default configureStore({
	reducer: {
		
		books: booksReducer,
		auth: authReducer
	}
});