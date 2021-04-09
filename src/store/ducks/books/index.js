import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];


export const addBooks = createAction('ADD_BOOKS');

export default createReducer(INITIAL_STATE, {
	[addBooks.type]: (state, action) => [ ...action.payload ],
	
});