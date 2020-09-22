import { NoteContext } from 'notesContext/NoteProvider';
import { useContext } from 'react';

const useNotes = () => {
	const { notesState, dispatch } = useContext(NoteContext);

	const getAll = () => {
		return notesState?.data;
	};

	const getAllIds = () => {
		return notesState.data.map(note => note.id);
	};

	const get = (id) => {
		return notesState.data.find(note => note.id === id);
	};

	const save = (id, source) => {
		dispatch({
			type: 'UPDATE_NOTE',
			id,
			source
		});
	};

	const add = (source) => {
		dispatch({
			type: 'ADD_NOTE',
			source
		});
	};

	const remove = (id) => {
		dispatch({
			type: 'REMOVE_NOTE',
			id
		});
	};

	const open = (id) => {
		dispatch({
			type: 'OPEN_NOTE',
			id
		});
	};

	const close = () => {
		dispatch({
			type: 'CLOSE_NOTE'
		});
	};

	const getSelectedId = () => {
		return notesState.currentlyOpen;
	};

	const getSelected = () => {
		return notesState.data.find((note) => notesState.currentlyOpen === note.id) || {};
	};

	const isEditModeActive = () => {
		return notesState.isEditModeActive;
	};

	const setIsEditModeActive = (isActive: boolean) => {
		dispatch({
			type: 'UPDATE_IS_EDIT_MODE_ACTIVE',
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