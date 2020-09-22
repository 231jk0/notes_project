import React, { createContext, useReducer, useEffect } from 'react';
import { useNotesReducer } from './useNotesReducer';

export const NoteContext = createContext({} as any);

const NoteProvider = (props: { children: React.ReactNode }) => {
	const [
		notes,
		dispatch
	] = useReducer(
		useNotesReducer,
		[],
		() => {
			const localData = localStorage.getItem('notes');

			return localData ? JSON.parse(localData) : [];
		}
	);

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes));
	}, [ notes ]);

	return (
		<NoteContext.Provider value={{
			notes,
			dispatch
		}}>
			{ props.children }
		</NoteContext.Provider>
	);
};

export default NoteProvider;