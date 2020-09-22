import { useContext } from 'react';
import { NoteContext } from 'notesContext/NoteProvider';

const useNotes = () => {
	const { notes, dispatch } = useContext(NoteContext);

	const getAll = () => {
		return notes;
	};

	const getAllIds = () => {
		return notes.map(note => note.id);
	};

	const get = (id) => {
		return notes.find(note => note.id === id);
	};

	const save = (id, source) => {
		dispatch({
			type: 'UPDATE_NOTE',
			id,
			title: source
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

	return {
		getAll,
		getAllIds,
		get,
		save,
		add,
		remove
	};
};

export default useNotes;