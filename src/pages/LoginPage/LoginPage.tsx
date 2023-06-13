import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import useUser from "../../hooks/useUser/useUser";
import { paths } from "../../routers/paths/paths";
import { useAppDispatch } from "../../store";
import { UserCredentials, UserTokenStructure } from "../../store/user/types";
import { loginUserActionCreator } from "../../store/user/userSlice";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const { setLocalStorageKey } = useLocalStorage();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loginOnSubmit = async (userCredentials: UserCredentials) => {
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
      navigate(paths.routes);
    }
  };

  return (
    <LoginPageStyled>
      <img
        src="/media/bemount-logo.svg"
        alt="bemount web logo"
        width={250}
        height={100}
        className="logo__bemount"
      />
      <LoginForm actionOnSubmit={loginOnSubmit} />
    </LoginPageStyled>
  );
};

export default LoginPage;
