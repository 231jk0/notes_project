import Icon from 'components/Icon';
import { INITIAL_NOTE_SOURCE } from 'constants/notes.constants';
import { Note } from 'notesContext/notesReducer';
import useNotes from 'notesContext/useNotes';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const NotesList = () => {
	const notes = useNotes();

	const addNote = () => {
		notes.add(INITIAL_NOTE_SOURCE);
	};

	const openNote = (id: string) => {
		notes.open(id);
	};

	const data = notes.getAll() || [];

	return (
		<div className="notes-grid">
			<button
				onClick={addNote}
				className="notes-grid__add-note-button"
			>
				<Icon
					className="notes-grid__add-note-button-icon"
					iconName="plus"
				/>
			</button>
			{
				data.map(({
					id,
					source
				}: Note) => (
					<div
						key={id}
						onClick={openNote.bind(this, id)}
						className="notes-grid__item"
					>
						<ReactMarkdown
							className="notes-grid__item-source"
							source={source}
						/>
					</div>
				))
			}
		</div>
	);
};

export default NotesList;
