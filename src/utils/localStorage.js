export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  if (data !== null) {
    return JSON.parse(data);
  }

  return {};
};

export const setToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
