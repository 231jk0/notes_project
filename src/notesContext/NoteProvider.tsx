import { notesReducer, Note, NotesState } from './notesReducer';
import { NOTES_STATE } from 'constants/localStorageKeys.constants';
import { NotesActionType } from 'notesContext/NotesActions/actionTypes';
import React, { createContext, useReducer, useEffect } from 'react';

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
			const localData = localStorage.getItem(NOTES_STATE);

			return {
				currentlyOpen: '',
				isEditModeActive: false,
				data: (localData ? JSON.parse(localData) : []) as Note[]
			};
		}
	);

	useEffect(() => {
		localStorage.setItem(NOTES_STATE, JSON.stringify(notesState.data));
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