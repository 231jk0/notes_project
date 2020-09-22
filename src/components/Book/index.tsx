import React, { useContext } from 'react';
import { NoteContext } from 'notesContext/NoteProvider';

const Book = () => {
	const { notes, dispatch } = useContext(NoteContext);

	const addNote = () => {
		dispatch({
			type: 'ADD_NOTE',
			note: {
				title: 'title',
				author: 'author'
			}
		});
	};

	return (
		<div className="navbar">
			<h1>Ninja Reading List</h1>
			<p>Currently you have { notes.length } books to get through...</p>
			<button
				onClick={addNote}
			>
				dodaj
			</button>
		</div>
	);
};

export default Book;