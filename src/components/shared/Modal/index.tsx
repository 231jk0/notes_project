import React from 'react';

import { classes } from 'utils/html.util/classes';

interface Props {
	className?: string;
	isOpen: boolean;
	renderHiddenContent?: boolean; // If true modal will look nicer.
	onModalOverlayClick?: Function;
}

class Modal extends React.PureComponent<Props> {
	static defaultProps: Partial<Props> = {
		className: '',
		renderHiddenContent: false
	}

	handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const { onModalOverlayClick } = this.props;

		const clickedOnModalOverlay = (
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
			isOpen,
			renderHiddenContent
		} = this.props;

		if (!isOpen && !renderHiddenContent) {
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
					{ (isOpen || renderHiddenContent) && this.props.children }
				</div>
			</div>
		);
	}
}

export default Modal as React.ComponentClass<Props>;