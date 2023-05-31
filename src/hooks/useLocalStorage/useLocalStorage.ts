const useLocalStorage = () => {
  const setLocalStorageKey = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };
  const getLocalStorageKey = (key: string) => {
    localStorage.getItem(key);
  };

  return {

    setLocalStorageKey,
    getLocalStorageKey,



  };
};

export default useLocalStorage;
