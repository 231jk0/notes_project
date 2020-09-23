import React, { useMemo } from 'react';
import Icon from 'components/Icon';
import { INITIAL_NOTE_SOURCE } from 'constants/notes.constants';
import NotesGridItem from 'pages/index/NotesGrid/NotesGridItem';
import useNotes from 'providers/useNotes';

const NotesGrid = () => {
	const notes = useNotes();

	const data = notes.getAllIds();

	const addNote = () => {
		notes.add(INITIAL_NOTE_SOURCE);
	};

	return useMemo(() => {
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
					data.map(id => (
						<NotesGridItem
							key={id}
							id={id}
						/>
					))
				}
			</div>
		);
	}, [
		JSON.stringify(data)
	]);
};

export default NotesGrid;
