import NoteProvider from 'notesContext/NoteProvider';
import React from 'react';
import Book from 'components/Book';

export default class App extends React.PureComponent {
	render () {
		return (
			<NoteProvider>
				testiranje
				<Book />
			</NoteProvider>
		);
	}
}