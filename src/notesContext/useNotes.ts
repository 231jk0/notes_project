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
		return notesState.data.find(notesState.currentlyOpen).id;
	};

	const getSelected = () => {
		return notesState.data.find(notesState.currentlyOpen);
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
		getSelected
	};
};

export default useNotes;