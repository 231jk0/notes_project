import useNotes from 'notesContext/useNotes';
import React from 'react';
import { Note } from 'notesContext/notesReducer';
import ReactMarkdown from 'react-markdown';
import NoteModal from 'pages/index/NoteModal';

const sourceExample =
`This is a note
==============

Shopping list:
* apples
* oranges
* toilet paper
`;

const NotesList = () => {
	const notes = useNotes();

	return (
		<>
			<button onClick={() => console.log(notes.getAll())}>getAll</button>
			<button onClick={() => console.log(notes.getAllIds())}>getAllIds</button>
			<button onClick={() => console.log(notes.get(notes.getAllIds()[0]))}>get First item</button>
			<button onClick={() => console.log(notes.save(notes.getAllIds()[0], 'test'))}>Set First item source to test</button>
			<button onClick={() => console.log(notes.add('testiranje'))}>Add item with source testiranje</button>
			<button onClick={() => console.log(notes.remove(notes.getAllIds()[0]))}>Remove First item</button>
			<button onClick={() => console.log(notes.open(notes.getAllIds()[0]))}>Open First item</button>
			<button onClick={() => console.log(notes.close())}>Close item</button>
			<button onClick={() => console.log(notes.getSelectedId())}>Get Selected Item</button>
			<button onClick={() => console.log(notes.getSelected())}>Get Selected data</button>
			<div className="notes-grid">
				<button
					onClick={() => notes.add('default content')}
					className="notes-grid__add-note-button"
				>
					+
				</button>
				{
					notes.getAll().map((note: Note) => (
						<div
							key={note.id}
							onClick={() => notes.open(note.id)}
							className="notes-grid__item"
						>
							<div
								onClick={() => notes.remove(note.id)}
								className="remove"
								style={{
									position: 'absolute',
									top: 0,
									right: 0,
									width: 10,
									height: 10,
									background: 'yellow'
								}}
							>
							</div>
							<ReactMarkdown
								className="notes-grid__item-source"
								source={note.source}
							/>
						</div>
					))
				}
			</div>
			<NoteModal />
		</>
	);
};

export default NotesList;
