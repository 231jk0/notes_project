import React, { createContext, useReducer, useEffect } from 'react';
import { DATA } from 'constants/localStorageKeys.constants';
import { NotesActionType } from 'providers/NoteProvider/actionTypes';
import { notesReducer, NotesState, Note } from 'providers/NoteProvider/notesReducer';
import { getObjectFromLocalStorage } from 'utils/browserStorage.util/getObjectFromLocalStorage';

interface NoteContextInterface {
	notes: NotesState;
	dispatch: React.Dispatch<NotesActionType>;
}

export const NoteContext = createContext({
} as NoteContextInterface);

const NoteProvider = (props: { children: React.ReactNode }) => {
	const [
		notes,
		dispatch
	] = useReducer(
		notesReducer,
		{},
		() => {
			const data = getObjectFromLocalStorage<Note[]>(DATA) || [];

			return {
				currentlyOpen: '',
				isEditModeActive: false,
				data
			};
		}
	);

	useEffect(() => {
		localStorage.setItem(DATA, JSON.stringify(notes.data));
	}, [ notes.data ]);

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