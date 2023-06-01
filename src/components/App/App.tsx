import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";
import { useEffect } from "react";

const App = (): React.ReactElement => {
  const { getLocalStorageKey } = useLocalStorage();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const token = getLocalStorageKey("token");
  useEffect(() => {
    if (token) {
      dispatch(loginUserActionCreator(getTokenData(token)));
      navigate("/home");
    }
  }, [dispatch, getTokenData, navigate, token]);

  return <Layout />;
};

export default App;
