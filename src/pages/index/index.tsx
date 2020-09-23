import React from 'react';
import NoteModal from 'pages/index/NoteModal';
import NotesGrid from 'pages/index/NotesGrid';
import NoteProvider from 'providers/NoteProvider';

const HomePage = () => {
	return (
		<NoteProvider>
			<NotesGrid />
			<NoteModal />
		</NoteProvider>
	);
};

export default HomePage;