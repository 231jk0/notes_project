import React from 'react';

import { classes } from 'utils/html.util/classes';

interface Props {
	className?: string;
	isOpen: boolean;
	onModalOverlayClick?: Function;
}

class Modal extends React.PureComponent<Props> {
	static defaultProps: Partial<Props> = {
		className: ''
	}

	handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const { onModalOverlayClick } = this.props;

		const clickedOnModalOverlay = (
			(event.target as HTMLElement)
				.className
				.includes &&
			(event.target as HTMLElement)
				.className
				.includes('modal--is-open')
		);

		if (clickedOnModalOverlay && onModalOverlayClick) {
			onModalOverlayClick();
		}
	}

	render() {
		const {
			className,
			isOpen
		} = this.props;

		if (!isOpen) {
			return false;
		}

		return (
			<div
				className={classes([
					'modal',
					isOpen && 'modal--is-open'
				])}
				onClick={this.handleOverlayClick}
			>
				<div className={classes([
					'modal__content',
					className
				])}>
					{
						isOpen && this.props.children
					}
				</div>
			</div>
		);
	}
}

export default Modal as React.ComponentClass<Props>;