import { ADD_NOTE } from 'providers/NoteProvider/actionNames';

export interface AddNoteActionType {
	type: typeof ADD_NOTE;
	payload: string;
}