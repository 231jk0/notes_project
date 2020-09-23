import { UPDATE_NOTE } from 'providers/NoteProvider/actionNames';
import { Note } from 'providers/NoteProvider/notesReducer';

export interface UpdateNoteActionType {
	type: typeof UPDATE_NOTE;
	payload: Note;
}