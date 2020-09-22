import React, { createContext, useReducer, useEffect } from 'react';
import { notesReducer, Note } from './notesReducer';

export const NoteContext = createContext({} as any);

const NoteProvider = (props: { children: React.ReactNode }) => {
	const [
		notesState,
		dispatch
	] = useReducer(
		notesReducer,
		{
			currentlyOpen: '',
			isEditModeActive: false,
			data: [] as Note[]
		},
		() => {
			const localData = localStorage.getItem('notesState');

			return {
				currentlyOpen: '',
				isEditModeActive: false,
				data: (localData ? JSON.parse(localData) : []) as Note[]
			};
		}
	);

	useEffect(() => {
		localStorage.setItem('notesState', JSON.stringify(notesState.data));
	}, [ notesState ]);

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