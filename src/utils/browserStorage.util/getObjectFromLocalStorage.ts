export const getObjectFromLocalStorage = <T>(key: string): T => {
	const stringifiedObject = window.localStorage.getItem(key);

	return JSON.parse(stringifiedObject) as T;
};