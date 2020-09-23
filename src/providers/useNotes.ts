import { useContext } from 'react';
import { NoteContext } from 'providers/NoteProvider';
import { UPDATE_NOTE, ADD_NOTE, REMOVE_NOTE, OPEN_NOTE, CLOSE_NOTE, UPDATE_IS_EDIT_MODE_ACTIVE } from 'providers/NoteProvider/actionNames';
import { Note } from 'providers/NoteProvider/notesReducer';

const useNotes = () => {
	const {
		notes,
		dispatch
	} = useContext(NoteContext);

	const getAll = () => {
		return notes?.data;
	};

	const getAllIds = () => {
		return notes.data.map(note => note.id);
	};

	const get = (id: string) => {
		return notes.data.find(note => note.id === id);
	};

	const save = (id: string, source: string) => {
		dispatch({
			type: UPDATE_NOTE,
			payload: {
				id,
				source
			}
		});
	};

	const add = (source: string) => {
		dispatch({
			type: ADD_NOTE,
			payload: source
		});
	};

	const remove = (id: string) => {
		dispatch({
			type: REMOVE_NOTE,
			payload: id
		});
	};

	const open = (id: string) => {
		dispatch({
			type: OPEN_NOTE,
			payload: id
		});
	};

	const close = () => {
		dispatch({
			type: CLOSE_NOTE
		});
	};

	const getSelectedId = () => {
		return notes.currentlyOpen;
	};

	const getSelected = () => {
		return notes.data.find((note) => notes.currentlyOpen === note.id) || {} as Note;
	};

	const isEditModeActive = () => {
		return notes.isEditModeActive;
	};

	const setIsEditModeActive = (isActive: boolean) => {
		dispatch({
			type: UPDATE_IS_EDIT_MODE_ACTIVE,
			payload: isActive
		});
	};

	return {
		getAll,
		getAllIds,
		get,
		save,
		add,
		remove,
		open,
		close,
		getSelectedId,
		getSelected,
		isEditModeActive,
		setIsEditModeActive
	};
};

export default useNotes;