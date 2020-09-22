import React from 'react';
import { classes } from 'utils/html.util/classes';

interface Props {
	id: string;
	className?: string;
	type: 'text' | 'password' | 'number';
	value?: string | string[] | number;
	placeholder?: string;
	rows?: number;
	maxLength?: number;
	isDisabled?: boolean;
	isValid?: boolean;

	onChange?: React.FormEventHandler<any>;
	onBlur?: React.FormEventHandler<any>;
}

class Input extends React.PureComponent<Props> {
	static defaultProps: Partial<Props> = {
		className: ''
	}

	getBaseClasses = () => {
		const { className } = this.props;

		return [
			className,
			'input'
		];
	}

	render() {
		const {
			id,
			type,
			value,
			placeholder,
			isDisabled,
			rows,
			maxLength,
			onChange,
			onBlur
		} = this.props;

		return (
			rows
				? (
					<textarea
						id={id}
						className={classes([
							...this.getBaseClasses(),
							'input--textarea'
						])}
						value={value}
						placeholder={placeholder}
						disabled={isDisabled}
						rows={rows}
						maxLength={maxLength}
						onChange={onChange}
						onBlur={onBlur}
					/>
				) : (
					<input
						id={id}
						className={classes([ ...this.getBaseClasses() ])}
						type={type}
						value={value}
						placeholder={placeholder}
						disabled={isDisabled}
						maxLength={maxLength}
						onChange={onChange}
						onBlur={onBlur}
					/>
				)
		);
	}
}

export default Input as React.ComponentClass<Props>;