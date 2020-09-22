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

export const notesReducer = (state: NotesState, action) => {
	switch (action.type) {
		case 'ADD_NOTE':
			return {
				...state,
				data: [
					...state.data,
					{
						id: uuid(),
						source: action.source
					}
				]
			};
		case 'REMOVE_NOTE':
			return {
				...state,
				data: state.data.filter(note => note.id !== action.id)
			};
		case 'UPDATE_NOTE':
			const newData = [];

			for (const note of state.data) {
				if (note.id === action.id) {
					newData.push({
						...note,
						source: action.source
					});

					continue;
				}

				newData.push(note);
			}

			return {
				...state,
				data: newData
			};
		case 'OPEN_NOTE':
			return {
				...state,
				currentlyOpen: action.id,
				isEditModeActive: false
			};
		case 'CLOSE_NOTE':
			return {
				...state,
				currentlyOpen: '',
				isEditModeActive: false
			};
		case 'UPDATE_IS_EDIT_MODE_ACTIVE':
			return {
				...state,
				isEditModeActive: action.payload
			};
		default:
			return state;
	}
};