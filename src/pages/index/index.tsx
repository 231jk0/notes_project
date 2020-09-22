import NoteProvider from 'notesContext/NoteProvider';
import NotesList from 'pages/index/NotesList';
import React from 'react';

const HomePage = () => {
	return (
		<NoteProvider>
			<NotesList />
		</NoteProvider>
	);
};

export default HomePage;