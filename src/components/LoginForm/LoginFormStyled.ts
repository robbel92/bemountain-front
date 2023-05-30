import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  max-width: 600px;
  flex-direction: column;
  gap: 30px;
  padding: 40px 30px;

  .form {
    &__title {
      margin-bottom: 20px;
      font-weight: 800;
      font-size: 20px;
      text-align: center;
      color: white;
    }
    &__input__username,
    &__input__password {
      padding: 15px 30px;
      background: transparent;
      color: white;
      box-shadow: none;
      font-weight: 400;
      letter-spacing: 2px;
      text-align: center;
      border-radius: 5px;
      border: 1px solid white;
      font-size: 30px;
      ::placeholder {
        font-weight: 200;
        font-size: 20px;
        color: #ffffff;
        text-align: center;
      }
    }
    &__button__login {
      background-color: ${(props) => props.theme.colors.button};
      justify-content: center;
      text-align: center;
      color: white;
      font-weight: 600;
      border: 1px solid white;
      border-radius: 5px;
      font-size: 20px;
      padding: 20px 30px;
    }
  }
`;

export default LoginFormStyled;
