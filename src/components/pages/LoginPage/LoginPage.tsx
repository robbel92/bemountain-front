import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../../hooks/useToken/useToken";
import useUser from "../../../hooks/useUser/useUser";
import { useAppDispatch } from "../../../store";
import { UserCredentials, UserTokenStructure } from "../../../store/user/types";
import { loginUserActionCreator } from "../../../store/user/userSlice";
import Header from "../../Header/Header";
import LoginForm from "../../LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";
import { paths } from "../../../routers/paths/paths";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../../store/ui/uiSlice";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const { setLocalStorageKey } = useLocalStorage();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loginOnSubmit = async (userCredentials: UserCredentials) => {
    dispatch(showLoadingActionCreator());
    const token = await getUserToken(userCredentials);

    if (token) {
      const userData = await getTokenData(token);

      dispatch(
        loginUserActionCreator({
          ...userData,
          token: token,
        } as UserTokenStructure)
      );
      setLocalStorageKey("token", token);
      navigate(paths.home);
      dispatch(hideLoadingActionCreator());
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
