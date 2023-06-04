import styled from "styled-components";

const FeedbackStyled = styled.div`
  background-color: #000000be;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  .feedback {
    &__message {
      display: flex;
      padding: 50px;
      font-size: 20px;
      font-weight: 600;
      background-color: white;
      border-radius: 5px;
      flex-direction: column;
      align-items: center;
      border: solid 5px darkgreen;
      gap: 30px;
    }

    &__button {
      background-color: ${(props) => props.theme.colors.button};
      justify-content: center;
      text-align: center;
      color: white;
      font-weight: 600;
      border-radius: 5px;
      font-size: 15px;
      padding: 10px 30px;
    }
  }

  .error {
    &__message {
      border-color: red;
    }
    &__button {
      background-color: red;
    }
  }
`;

export default FeedbackStyled;
