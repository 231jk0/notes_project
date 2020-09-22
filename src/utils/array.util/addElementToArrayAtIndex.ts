interface AddElementToArrayAtIndex<T> {
	array: T[];
	element: T;
	index: number;
	useOriginalArray?: boolean;
}

export const addElementToArrayAtIndex = <T>(options: AddElementToArrayAtIndex<T>) => {
	const {
		array,
		element,
		index,
		useOriginalArray = false
	} = options;

	if (!useOriginalArray) {
		return [
			...array.slice(0, index),
			element,
			...array.slice(index)
		];
	}

	array.splice(index, 0, element);
	return array;
};