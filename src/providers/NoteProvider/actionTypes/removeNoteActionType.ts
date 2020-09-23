import { REMOVE_NOTE } from 'providers/NoteProvider/actionNames';

export interface RemoveNoteActionType {
	type: typeof REMOVE_NOTE;
	payload: string;
}