const useLocalStorage = () => {
  const setLocalStoragekey = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  return {
    setLocalStoragekey,
  };
};

export default useLocalStorage;
