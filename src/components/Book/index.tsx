import React, { useContext } from 'react';
import { NoteContext } from 'notesContext/NoteProvider';

const Book = () => {
	const { books, dispatch } = useContext(NoteContext);

	const addBook = () => {
		dispatch({
			type: 'ADD_BOOK',
			book: {
				title: 'title',
				author: 'author'
			}
		});
	};

	return (
		<div className="navbar">
			<h1>Ninja Reading List</h1>
			<p>Currently you have { books.length } books to get through...</p>
			<button
				onClick={addBook}
			>
				dodaj
			</button>
		</div>
	);
};

export default Book;