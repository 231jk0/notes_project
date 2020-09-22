import NoteProvider from 'notesContext/NoteProvider';
import NoteModal from 'pages/index/NoteModal';
import NotesList from 'pages/index/NotesList';
import React from 'react';

const HomePage = () => {
	return (
		<NoteProvider>
			<NotesList />
			<NoteModal />
		</NoteProvider>
	);
};

export default HomePage;