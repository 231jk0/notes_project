import React, { createContext, useReducer, useEffect } from 'react';
import { useNotesReducer } from './useNotesReducer';

export const BookContext = createContext({});

const NoteProvider = (props: { children: React.ReactNode }) => {
	const [ books, dispatch ] = useReducer(useNotesReducer, [], () => {
		const localData = localStorage.getItem('books');

		return localData ? JSON.parse(localData) : [];
	});

	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(books));
	}, [ books ]);

	return (
		<BookContext.Provider value={{ books, dispatch }}>
			{ props.children }
		</BookContext.Provider>
	);
};

export default NoteProvider;