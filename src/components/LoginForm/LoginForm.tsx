import { UserCredentials } from "../../store/user/types";
import LoginFormStyled from "./LoginFormStyled";

interface LoginFormProps {
  actionOnSubmit: (user: UserCredentials) => void;
}

const LoginForm = ({ actionOnSubmit }: LoginFormProps): React.ReactElement => {
  return (
    <LoginFormStyled
      className="form"
      onSubmit={() => {
        actionOnSubmit;
      }}
    >
      <h1 className="form__title">Log in to enjoy the mountains</h1>
      <label htmlFor="username" hidden>
        Username
      </label>
      <input
        autoComplete="off"
        type="text"
        id="username"
        className="form__input__username"
        placeholder="Username"
      />
      <label htmlFor="username" hidden>
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        className="form__input__password"
      />
      <button type="submit" className="form__button__login">
        LOG IN
      </button>
    </LoginFormStyled>
  );
};
export default LoginForm;
