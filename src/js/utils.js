export const getStorageObject = (key) => JSON.parse(window.localStorage.getItem(key))

export const setStorageObject = (key, value) => window.localStorage.setItem(key, JSON.stringify(value)) 
