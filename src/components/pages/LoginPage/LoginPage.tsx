import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../../hooks/useToken/useToken";
import useUser from "../../../hooks/useUser/useUser";
import { useAppDispatch } from "../../../store";
import { UserCredentials } from "../../../store/user/types";
import { loginUserActionCreator } from "../../../store/user/userSlice";
import Header from "../../Header/Header";
import LoginForm from "../../LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";
import { paths } from "../../../routers/paths/paths";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const navigate = useNavigate();
  const { setLocalStoragekey } = useLocalStorage();
  const dispatch = useAppDispatch();

  const loginOnSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);

    if (token) {
      const userData = await getTokenData(token);
      dispatch(loginUserActionCreator(userData));
      setLocalStoragekey("token", token);
    } else {
      navigate(paths.login, { replace: true });
    }
  };
  return (
    <LoginPageStyled>
      <Header />
      <LoginForm actionOnSubmit={loginOnSubmit} />
    </LoginPageStyled>
  );
};

export default LoginPage;
