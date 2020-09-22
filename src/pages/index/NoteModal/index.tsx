import Input from 'components/Input';
import Modal from 'components/shared/Modal';
import useNotes from 'notesContext/useNotes';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const NoteModal = () => {
	const [ source, setSource ] = useState('');
	const notes = useNotes();

	return (
		<Modal
			className="note-modal"
			onModalOverlayClick={() => notes.close()}
			isOpen={notes.getSelectedId() !== ''}
		>
			<div className="note-modal__buttons">
				<div
					className="note-modal__back-button"
					onClick={() => {
						if (notes.isEditModeActive()) {
							notes.setIsEditModeActive(false);
						} else {
							notes.close();
						}
					}}
				>
					b
				</div>

				{
					!notes.isEditModeActive() && (
						<div
							className="note-modal__edit-button"
							onClick={() => {
								notes.setIsEditModeActive(true);
								setSource(notes.getSelected().source);
							}}
						>
							e
						</div>
					)
				}

				<div
					className="note-modal__save-button"
					onClick={() => {
						notes.save(notes.getSelectedId(), source);
						notes.close();
					}}
				>
					s
				</div>

				<div
					className="note-modal__delete-button"
					onClick={() => {
						notes.remove(notes.getSelectedId());
						notes.close();
					}}
				>
					d
				</div>
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