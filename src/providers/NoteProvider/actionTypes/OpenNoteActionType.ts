import { OPEN_NOTE } from 'providers/NoteProvider/actionNames';

export interface OpenNoteActionType {
	type: typeof OPEN_NOTE;
	payload: string;
}
