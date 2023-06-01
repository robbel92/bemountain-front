import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";

const App = (): React.ReactElement => {
  const { getLocalStorageKey } = useLocalStorage();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();

  const token = getLocalStorageKey("token");

  if (token) {
    dispatch(loginUserActionCreator(getTokenData(token)));
  }
  return <Layout />;
};

export default App;
