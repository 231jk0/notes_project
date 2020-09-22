import useNotes from 'notesContext/useNotes';
import React, { useContext } from 'react';
import { ShowPrettyJson } from 'utils/debug.util/ShowPrettyJson';
import { NoteContext } from 'notesContext/NoteProvider';

const Notes = () => {
	const notes = useNotes();

	const { notesState } = useContext(NoteContext);

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
			<ShowPrettyJson
				value={notes.getAll()}
			/>

			<ShowPrettyJson
				value={notesState}
			/>
		</>
	);
};

export default Notes;