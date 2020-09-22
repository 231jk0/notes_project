import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE, OPEN_NOTE, CLOSE_NOTE, UPDATE_IS_EDIT_MODE_ACTIVE } from './actionNames';
import { Note } from 'notesContext/notesReducer';

export interface AddNoteActionType {
	type: typeof ADD_NOTE;
	payload: string;
}

export interface RemoveNoteActionType {
	type: typeof REMOVE_NOTE;
	payload: string;
}

export interface UpdateNoteActionType {
	type: typeof UPDATE_NOTE;
	payload: Note;
}

export interface OpenNoteActionType {
	type: typeof OPEN_NOTE;
	payload: string;
}

export interface CloseNoteActionType {
	type: typeof CLOSE_NOTE;
}

export interface UpdateIsEditModeActionType {
	type: typeof UPDATE_IS_EDIT_MODE_ACTIVE;
	payload: boolean;
}

export type NotesActionType = (
	AddNoteActionType
	| RemoveNoteActionType
	| UpdateNoteActionType
	| OpenNoteActionType
	| CloseNoteActionType
	| UpdateIsEditModeActionType
)