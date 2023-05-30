import { useState } from "react";
import { UserCredentials } from "../../store/user/types";
import LoginFormStyled from "./LoginFormStyled";

interface LoginFormProps {
  actionOnSubmit: (user: UserCredentials) => void;
}

const LoginForm = ({ actionOnSubmit }: LoginFormProps): React.ReactElement => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

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
        className="form__username"
        placeholder="Username"
        onChange={onChangeInputs}
        value={userData.username}
      />
      <label htmlFor="username" hidden>
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        className="form__password"
        onChange={onChangeInputs}
        value={userData.password}
      />
      <button type="submit" className="form__login">
        LOG IN
      </button>
    </LoginFormStyled>
  );
};
export default LoginForm;
