import React, { createContext, useReducer, useEffect } from 'react';
import { useNotesReducer } from './useNotesReducer';

export const NoteContext = createContext({} as any);

const NoteProvider = (props: { children: React.ReactNode }) => {
	const [
		books,
		dispatch
	] = useReducer(
		useNotesReducer,
		[],
		() => {
			const localData = localStorage.getItem('books');

			return localData ? JSON.parse(localData) : [];
		}
	);

	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(books));
	}, [ books ]);

	return (
		<NoteContext.Provider value={{ books, dispatch }}>
			{ props.children }
		</NoteContext.Provider>
	);
};

export default NoteProvider;