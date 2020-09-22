import React from 'react';
import { classes } from 'utils/html.util/classes';

interface Props {
	id: string;
	className?: string;
	type: 'text' | 'password' | 'number';
	label: string;
	value?: string | string[] | number;
	placeholder?: string;
	rows?: number;
	maxLength?: number;
	infoMessage?: string;
	errorMessage?: string;
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
		const {
			className,
			errorMessage,
			isValid
		} = this.props;

		return [
			className,
			'input',
			!!errorMessage && 'input--invalid',
			isValid && 'input--valid'
		];
	}

	render() {
		const {
			id,
			type,
			label,
			value,
			placeholder,
			infoMessage,
			errorMessage,
			isDisabled,
			rows,
			maxLength,
			onChange,
			onBlur
		} = this.props;

		return (
			<div
				className={classes([
					'form-group'
				])}
			>
				<label
					className="form-group__label"
					htmlFor={id}
				>
					{ label }:
				</label>
				{
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
				}
				{
					errorMessage && (
						<div className="error-message">{ errorMessage }</div>
					)
				}
				{
					!errorMessage && infoMessage && (
						<small className="info-message">{ infoMessage }</small>
					)
				}
			</div>
		);
	}
}

export default Input as React.ComponentClass<Props>;