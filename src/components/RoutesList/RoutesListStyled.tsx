import styled from "styled-components";

const RoutesListStyled = styled.div`
  .routes {
    &__list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;
      width: 340px;
    }

    &__title {
      opacity: 0;
      text-align: center;
      color: white;
      font-weight: 600;
      font-size: 24px;
    }
    &__card {
      border-radius: 10px;
      box-shadow: 0px 8px 7px #000000bf;
      background-color: #252525c7;
      border: solid 3px #ffffff24;
    }
  }

  .notFound {
    text-align: center;
    padding: 20px;
    color: white;
    font-size: 50px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: #0000001a;
  }
`;

export default RoutesListStyled;
