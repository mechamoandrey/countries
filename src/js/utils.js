export const getStorageObject = (key) => JSON.parse(window.localStorage.getItem(key))

export const setStorageObject = ({key, object}) => window.localStorage.setItem(key, JSON.stringify(object)) 