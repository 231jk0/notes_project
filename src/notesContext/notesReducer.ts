import uuid from 'uuid/v4';

interface Note {
	id: string;
	title: string;
	author: string;
}

type NotesState = Note[];

export const notesReducer = (state: NotesState, action) => {
	switch (action.type) {
		case 'ADD_NOTE':
			return [
				...state,
				{
					id: uuid(),
					source: action.source
				}
			];
		case 'REMOVE_NOTE':
			return state.filter(note => note.id !== action.id);
		case 'UPDATE_NOTE':
			const newState = [];

			for (const note of state) {
				if (note.id === action.id) {
					newState.push({
						...note,
						title: action.title
					});

					continue;
				}

				newState.push(note);
			}

			return newState;
		default:
			return state;
	}
};