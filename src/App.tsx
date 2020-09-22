import NoteProvider from 'notesContext/NoteProvider';
import React from 'react';
import Notes from 'components/Notes';
import Input from 'components/Input';

interface State {
	test: string;
}

export default class App extends React.PureComponent<{}, State> {
	state: State = {
		test: ''
	}

	onChange = (e: any) => {
		this.setState({
			test: e.target.value
		});
	}

	render () {
		return (
			<NoteProvider>
				<Notes />
				<Input
					id="test"
					type="text"
					label="input"
					value={this.state.test}
					onChange={this.onChange}
				/>
			</NoteProvider>
		);
	}
}