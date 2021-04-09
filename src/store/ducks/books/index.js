import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const addBook = createAction('ADD_BOOK');
export const addBooks = createAction('ADD_BOOKS');

export default createReducer(INITIAL_STATE, {
	[addBook.type]: (state, action) => [ ...state, action.payload ],
	[addBooks.type]: (state, action) => [ ...action.payload ],
	
});