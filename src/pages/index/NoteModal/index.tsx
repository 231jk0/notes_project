import Modal from 'components/Modal';
import useNotes from 'notesContext/useNotes';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Icon from 'components/Icon';

const NoteModal = () => {
	const [ source, setSource ] = useState('');
	const notes = useNotes();

	return (
		<Modal
			className="note-modal"
			onModalOverlayClick={(e) => notes.close()}
			isOpen={notes.getSelectedId() !== ''}
		>
			<div className="note-modal__buttons">
				<Icon
					className="note-modal__back-button"
					iconName="left"
					onClick={() => {
						if (notes.isEditModeActive()) {
							notes.setIsEditModeActive(false);
						} else {
							notes.close();
						}
					}}
				/>

				{
					notes.isEditModeActive() ? (
						<Icon
							className="note-modal__save-button"
							iconName="save"
							onClick={() => {
								notes.save(notes.getSelectedId(), source);
								notes.setIsEditModeActive(false);
							}}
						/>
					) : (
						<Icon
							className="note-modal__edit-button"
							iconName="edit"
							onClick={() => {
								notes.setIsEditModeActive(true);
								setSource(notes.getSelected().source);
							}}
						/>
					)
				}
				<Icon
					className="note-modal__delete-button"
					iconName="delete"
					onClick={() => {
						notes.remove(notes.getSelectedId());
						notes.close();
					}}
				/>
			</div>

			{
				notes.isEditModeActive()
					? (
						<textarea
							id="nesto"
							className="note-modal__edit-note-textarea"
							value={source}
							rows={30}
							onChange={(e: any) => setSource(e.target.value)}
						/>
					) : (
						<ReactMarkdown
							className="notes-grid__item-source-modal"
							source={notes.getSelected().source}
						/>
					)

			}
		</Modal>
	);
};

export default NoteModal;