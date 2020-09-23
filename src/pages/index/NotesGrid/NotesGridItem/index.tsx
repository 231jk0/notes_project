import React, { useMemo } from 'react';
import useNotes from 'providers/useNotes';
import ReactMarkdown from 'react-markdown';

interface Props {
	id: string;
}

const NotesGridItem = ({ id }: Props) => {
	const notes = useNotes();
	const { source } = notes.get(id);

	const openNote = () => {
		notes.open(id);
	};

	return useMemo(() => {
		return (
			<div
				key={id}
				onClick={openNote}
				className="notes-grid__item"
			>
				<ReactMarkdown
					className="notes-grid__item-source"
					source={source}
				/>
			</div>
		);
	}, [
		id,
		source
	]);
};

export default NotesGridItem;