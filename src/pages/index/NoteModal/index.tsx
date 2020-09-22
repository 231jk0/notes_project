import Modal from 'components/shared/Modal';
import useNotes from 'notesContext/useNotes';
import React from 'react';
import { ShowPrettyJson } from 'utils/debug.util/ShowPrettyJson';

const NoteModal = () => {
	const notes = useNotes();

	console.log(notes.isEditModeActive());

	return (
		<Modal
			className="note-modal"
			onModalOverlayClick={() => notes.close()}
			isOpen={notes.getSelectedId() !== ''}
		>
			<div className="note-modal__buttons">
				<div
					className="note-modal__back-button"
					onClick={() => notes.setIsEditModeActive(false)}
				>
					b
				</div>

				{
					!notes.isEditModeActive() && (
						<div
							className="note-modal__edit-button"
							onClick={() => notes.setIsEditModeActive(true)}
						>
							e
						</div>
					)
				}

				<div className="note-modal__save-button">
					s
				</div>

				<div className="note-modal__delete-button">
					d
				</div>
			</div>

			<ShowPrettyJson
				value={notes.getSelected()}
			/>
		</Modal>
	);
};

export default NoteModal;