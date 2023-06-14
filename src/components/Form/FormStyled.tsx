import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: -webkit-fill-available;
  gap: 10px;

  label {
    text-align: initial;
    color: white;
  }
  input,
  textarea {
    padding: 15px 20px;
    backdrop-filter: blur(1px);
    background: transparent;
    color: white;
    box-shadow: none;
    font-weight: 400;
    letter-spacing: 2px;
    border-radius: 5px;
    border: 1px solid white;
    font-size: 20px;
    font-family: ${(props) => props.theme.fonts.primary_title};
  }

  select {
    padding: 15px 30px;
    backdrop-filter: blur(50px);
    background: transparent;
    color: white;
    box-shadow: none;
    font-weight: 400;
    letter-spacing: 2px;
    border-radius: 5px;
    border: 1px solid white;
    font-size: 20px;

    ::placeholder {
      font-style: light;
      font-weight: 100;
      font-size: 14px;
      color: #ffffff;
    }
  }

  select option {
    background-color: black;
  }

  .form-button {
    background-color: ${(props) => props.theme.colors.button};
    justify-content: center;
    text-align: center;
    color: white;
    font-weight: 600;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 20px;
    padding: 20px 30px;

    &:disabled {
      opacity: 0.5;
    }
  }
`;

export default FormStyled;
