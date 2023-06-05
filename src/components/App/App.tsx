import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";
import { useEffect } from "react";
import { UserTokenStructure } from "../../store/user/types";
import { paths } from "../../routers/paths/paths";

const App = (): React.ReactElement => {
  const { getLocalStorageKey } = useLocalStorage();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const token = getLocalStorageKey("token");

  useEffect(() => {
    if (token) {
      const userData = getTokenData(token);
      dispatch(
        loginUserActionCreator({
          ...userData,
          token: token,
        } as UserTokenStructure)
      );
      navigate(paths.home);
    }
  }, [dispatch, getTokenData, navigate, token]);

  return <Layout />;
};

export default App;
