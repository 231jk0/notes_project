import { NEW_ELEMENT_PLACEHOLDER, GRID } from 'constants/boardIds.constants';
import React from 'react';

export default class Board extends React.PureComponent {
	render () {
		return (
			<div
				className="board"
			>
				{ NEW_ELEMENT_PLACEHOLDER }
				{ GRID }
			</div>
		);
	}
}