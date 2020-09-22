import React, { createContext, useReducer, useEffect } from 'react';
import { notesReducer } from './notesReducer';

export const NoteContext = createContext({} as any);

const NoteProvider = (props: { children: React.ReactNode }) => {
	const [
		notesState,
		dispatch
	] = useReducer(
		notesReducer,
		{
			currentlyOpen: '',
			data: []
		},
		() => {
			const localData = localStorage.getItem('notes');

			return {
				currentlyOpen: '',
				data: localData ? JSON.parse(localData) : []
			};
		}
	);

	useEffect(() => {
		localStorage.setItem('notesState', JSON.stringify(notesState.data));
	}, [ notesState.data ]);

	return (
		<NoteContext.Provider value={{
			notesState,
			dispatch
		}}>
			{ props.children }
		</NoteContext.Provider>
	);
};

export default NoteProvider;