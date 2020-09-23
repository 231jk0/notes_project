import { UPDATE_IS_EDIT_MODE_ACTIVE } from 'providers/NoteProvider/actionNames';

export interface UpdateIsEditModeActionType {
	type: typeof UPDATE_IS_EDIT_MODE_ACTIVE;
	payload: boolean;
}