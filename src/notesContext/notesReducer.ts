import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE, OPEN_NOTE, CLOSE_NOTE, UPDATE_IS_EDIT_MODE_ACTIVE } from 'notesContext/NotesActions/actionNames';
import { NotesActionType } from 'notesContext/NotesActions/actionTypes';
import uuid from 'uuid/v4';

export interface Note {
	id: string;
	source: string;
}

export type NotesState = {
	currentlyOpen: string;
	isEditModeActive: boolean;
	data: Note[];
}

export const notesReducer = (state: NotesState, action: NotesActionType): NotesState => {
	switch (action.type) {
		case ADD_NOTE:
			return {
				...state,
				data: [
					...state.data,
					{
						id: uuid(),
						source: action.payload
					}
				]
			};
		case REMOVE_NOTE:
			return {
				...state,
				data: state.data.filter(note => note.id !== action.payload)
			};
		case UPDATE_NOTE:
			const newData = [];

			for (const note of state.data) {
				if (note.id === action.payload.id) {
					newData.push({
						...note,
						source: action.payload.source
					});

					continue;
				}

				newData.push(note);
			}

			return {
				...state,
				data: newData
			};
		case OPEN_NOTE:
			return {
				...state,
				currentlyOpen: action.payload,
				isEditModeActive: false
			};
		case CLOSE_NOTE:
			return {
				...state,
				currentlyOpen: '',
				isEditModeActive: false
			};
		case UPDATE_IS_EDIT_MODE_ACTIVE:
			return {
				...state,
				isEditModeActive: action.payload
			};
		default:
			return state;
	}
};