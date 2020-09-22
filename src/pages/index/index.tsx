import NoteProvider from 'notesContext/NoteProvider';
import NotesList from 'pages/index/NotesList';
import React from 'react';
import NoteModal from 'pages/index/NoteModal';

const HomePage = () => {
	return (
		<NoteProvider>
			<NotesList />
			<NoteModal />
		</NoteProvider>
	);
};

export default HomePage;