const useLocalStorage = () => {
  const setLocalStorageKey = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };
  const getLocalStorageKey = (key: string) => {
    return localStorage.getItem(key);
  };

  const removeLocalStorageKey = (key: string) => {
    localStorage.removeItem(key);
  };

  return {
    setLocalStorageKey,
    getLocalStorageKey,
    removeLocalStorageKey,
  };
};

export default useLocalStorage;
