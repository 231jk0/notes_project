import React, { createContext, useReducer, useEffect } from 'react';
import { notesReducer, Note, NotesState } from './notesReducer';
import { NotesActionType } from 'notesContext/NotesActions/actionTypes';

interface NoteContextInterface {
	notesState: NotesState;
	dispatch: React.Dispatch<NotesActionType>;
}

export const NoteContext = createContext({
} as NoteContextInterface);

const NoteProvider = (props: { children: React.ReactNode }) => {
	const [
		notesState,
		dispatch
	] = useReducer(
		notesReducer,
		{},
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