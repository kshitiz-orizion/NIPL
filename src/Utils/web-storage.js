const store = require('store');

export const getLocalStorage = key => {
  return store.get(`${key}`);
};
export const setLocalStorage = (key, value) => {
  store.set(`${key}`, value);
};
export const removeLocalStorage = key => {
  store.remove(`${key}`);
};
export const clearAllLocalStorage = () => {
  store.clearAll();
};
