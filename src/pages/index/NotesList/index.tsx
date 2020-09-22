import useNotes from 'notesContext/useNotes';
import React from 'react';
import { Note } from 'notesContext/notesReducer';
import ReactMarkdown from 'react-markdown';

const NotesList = () => {
	const notes = useNotes();

	return (
		<>
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
		</>
	);
};

export default NotesList;
