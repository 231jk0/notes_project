import Modal from 'components/shared/Modal';
import useNotes from 'notesContext/useNotes';
import React from 'react';
import { ShowPrettyJson } from 'utils/debug.util/ShowPrettyJson';

const NoteModal = () => {
	const notes = useNotes();

	return (
		<Modal
			className="note-modal"
			onModalOverlayClick={() => notes.close()}
			isOpen={notes.getSelectedId() !== ''}
		>
			<div className="note-modal__buttons">
				<div className="note-modal__back-button">
					b
				</div>

				<div className="note-modal__edit-button">
					e
				</div>

				<div className="note-modal__save-button">
					s
				</div>

				<div className="note-modal__edit-button">
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