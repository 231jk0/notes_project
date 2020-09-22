import React from 'react';

interface Props {
	tabIndex?: number;
	className?: string;
	iconName: string;
	onClick?: React.MouseEventHandler<any>;
	onMouseUp?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

class Icon extends React.PureComponent<Props> {
	render() {
		const {
			tabIndex,
			className,
			iconName,
			onClick,
			onMouseUp
		} = this.props;

		return (
			<svg
				tabIndex={tabIndex}
				className={className}
				onClick={onClick}
				onMouseUp={onMouseUp}
			>
				<use href={`/sprite.svg#icon-${iconName}`} />
			</svg>
		);
	}
}

export default Icon;