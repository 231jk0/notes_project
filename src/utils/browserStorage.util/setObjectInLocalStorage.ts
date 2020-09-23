interface SetObjectInLocalStorageOptions<T> {
	key: string;
	object: T;
}

export const setObjectInLocalStorage = <T>(options: SetObjectInLocalStorageOptions<T>): void => {
	const {
		key,
		object
	} = options;

	window.localStorage.setItem(key, JSON.stringify(object));
};