import React from 'react';

interface Props {
	value: any;
}

export const ShowPrettyJson = ({ value }: Props) => (
	<pre>
		{ JSON.stringify(value || '', null, 2) }
	</pre>
);