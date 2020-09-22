export const classes = (classList: (string|boolean)[]): string => {
	return classList
		.filter((_className) => (
			_className !== '' && _className !== false
		))
		.join(' ');
};