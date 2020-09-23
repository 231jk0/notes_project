import { AddNoteActionType } from 'providers/NoteProvider/actionTypes/addNoteActionType';
import { CloseNoteActionType } from 'providers/NoteProvider/actionTypes/CloseNoteActionType';
import { OpenNoteActionType } from 'providers/NoteProvider/actionTypes/OpenNoteActionType';
import { RemoveNoteActionType } from 'providers/NoteProvider/actionTypes/removeNoteActionType';
import { UpdateIsEditModeActionType } from 'providers/NoteProvider/actionTypes/updateIsEditModeActionType';
import { UpdateNoteActionType } from 'providers/NoteProvider/actionTypes/updateNoteActionType';

export type NotesActionType = (
	AddNoteActionType
	| RemoveNoteActionType
	| UpdateNoteActionType
	| OpenNoteActionType
	| CloseNoteActionType
	| UpdateIsEditModeActionType
)