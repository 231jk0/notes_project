export const removeObjectFromLocalStorage = (key: string) => {
	window.localStorage.removeItem(key);
};