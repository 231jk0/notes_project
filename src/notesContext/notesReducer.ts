import uuid from 'uuid/v4';

interface Note {
	id: string;
	source: string;
}

type NotesState = {
	currentlyOpen: string;
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
				currentlyOpen: action.id
			};
		case 'CLOSE_NOTE':
			return {
				...state,
				currentlyOpen: ''
			};
		default:
			return state;
	}
};