const useLocalStorage = () => {
  const setLocalStoragekey = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  return {
    setLocalStorageItem: setLocalStoragekey,
  };
};

export default useLocalStorage;
