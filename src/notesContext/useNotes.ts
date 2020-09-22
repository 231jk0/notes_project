import { NoteContext } from 'notesContext/NoteProvider';
import { UPDATE_NOTE, ADD_NOTE, REMOVE_NOTE, OPEN_NOTE, CLOSE_NOTE, UPDATE_IS_EDIT_MODE_ACTIVE } from 'notesContext/NotesActions/actionNames';
import { useContext } from 'react';

const useNotes = () => {
	const { notesState, dispatch } = useContext(NoteContext);

	const getAll = () => {
		return notesState?.data;
	};

	const getAllIds = () => {
		return notesState.data.map(note => note.id);
	};

	const get = (id: string) => {
		return notesState.data.find(note => note.id === id);
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
		return notesState.currentlyOpen;
	};

	const getSelected = () => {
		return notesState.data.find((note) => notesState.currentlyOpen === note.id);
	};

	const isEditModeActive = () => {
		return notesState.isEditModeActive;
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