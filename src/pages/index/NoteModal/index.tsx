import React, { useState } from 'react';
import Icon from 'components/Icon';
import Modal from 'components/Modal';
import useNotes from 'providers/useNotes';
import ReactMarkdown from 'react-markdown';

const NoteModal = () => {
	const notes = useNotes();
	const [ source, setSource ] = useState('');

	const selectedNote = notes.getSelected();
	const { id: selectedId = '' } = selectedNote;

	const isOpen = selectedId !== '';
	const isEditModeActive = notes.isEditModeActive();

	const goBack = () => {
		isEditModeActive
			? notes.setIsEditModeActive(false)
			: notes.close();
	};

	const saveNote = () => {
		notes.save(selectedId, source);
		goBack();
	};

	const openEditMode = () => {
		notes.setIsEditModeActive(true);
		setSource(selectedNote.source);
	};

	const deleteNote = () => {
		notes.remove(selectedId);
		notes.close();
	};

	const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
		setSource(event.target.value);
	};

	return (
		<Modal
			className="note-modal"
			isOpen={isOpen}
		>
			<div className="note-modal__buttons">
				<Icon
					className="note-modal__back-button"
					iconName="left"
					onClick={goBack}
				/>
				{
					isEditModeActive ? (
						<Icon
							className="note-modal__save-button"
							iconName="save"
							onClick={saveNote}
						/>
					) : (
						<Icon
							className="note-modal__edit-button"
							iconName="edit"
							onClick={openEditMode}
						/>
					)
				}
				<Icon
					className="note-modal__delete-button"
					iconName="delete"
					onClick={deleteNote}
				/>
			</div>
			{
				isEditModeActive
					? (
						<textarea
							className="note-modal__edit-note-textarea"
							value={source}
							rows={30}
							onChange={handleTextAreaChange}
						/>
					) : (
						<ReactMarkdown
							className="note-modal__source"
							source={selectedNote.source}
						/>
					)
			}
		</Modal>
	);
};

export default NoteModal;