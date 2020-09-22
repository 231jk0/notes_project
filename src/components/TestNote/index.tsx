import useNotes from 'notesContext/useNotes';
import React from 'react';
import { ShowPrettyJson } from 'utils/debug.util/ShowPrettyJson';

const TestNote = () => {
	const notes = useNotes();

	return (
		<>
			<button onClick={() => notes.remove('e400a390-623b-4d83-9c2f-a852e13c7b5d')}>but</button>
			<ShowPrettyJson
				value={notes.getAll()}
			/>
		</>
	);
};

export default TestNote;