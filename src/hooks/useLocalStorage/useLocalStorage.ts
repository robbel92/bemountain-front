const useLocalStorage = () => {
  const setLocalStorageToken = (token: string) => {
    localStorage.setItem("token", token);
  };
  return { setLocalStorageToken };
};

export default useLocalStorage;
