import HomePage from 'pages/index';
import React from 'react';

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
			<HomePage />
		);
	}
}