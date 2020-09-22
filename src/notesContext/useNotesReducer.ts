import uuid from 'uuid/v4';

interface Book {
	id: string;
	title: string;
	author: string;
}

type NotesState = Book[];

export const useNotesReducer = (state: NotesState, action) => {
	switch (action.type) {
		case 'ADD_BOOK':
			return [
				...state,
				{
					title: action.book.title,
					author: action.book.author,
					id: uuid()
				}
			];
		case 'REMOVE_BOOK':
			return state.filter(book => book.id !== action.id);
		default:
			return state;
	}
};