import React from 'react';
import NoteModal from 'pages/index/NoteModal';
import NotesList from 'pages/index/NotesList';
import NoteProvider from 'providers/NoteProvider';

const HomePage = () => {
	return (
		<NoteProvider>
			<NotesList />
			<NoteModal />
		</NoteProvider>
	);
};

export default HomePage;