import Header from "../../Header/Header";
import LoginForm from "../../LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <Header />
      <LoginForm actionOnSubmit={() => ({})} />
    </LoginPageStyled>
  );
};

export default LoginPage;
