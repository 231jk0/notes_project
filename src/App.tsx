import NoteProvider from 'notesContext/NoteProvider';
import React from 'react';

export default class App extends React.PureComponent {
	render () {
		return (
			<NoteProvider>
				testiranje
			</NoteProvider>
		);
	}
}