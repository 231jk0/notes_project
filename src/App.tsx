import Board from 'components/Board';
import React from 'react';

export default class App extends React.PureComponent {
	render () {
		return (
			<div
				className="app"
			>
				<Board />
			</div>
		);
	}
}