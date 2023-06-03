import styled from "styled-components";

const RouteCardStyled = styled.article`
  button {
    background-color: transparent;
  }

  .card-container {
    display: flex;
    justify-content: center;
    &__title {
      position: absolute;
      text-transform: uppercase;
      color: white;
      width: 280px;
      padding: 20px;
      background-image: linear-gradient(
        rgba(0, 0, 0, 0.834),
        rgba(0, 0, 0, 0.81)
      );
      font-size: 18px;
      letter-spacing: 0.15px;
      font-weight: 800;
      line-height: 24px;
      text-align: center;
    }
    &__image {
      border-radius: 5px;
    }
  }

  .card-buttons {
    display: flex;
    padding: 10px 30px;
    width: 280px;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.834),
      rgba(0, 0, 0, 0.81)
    );
    justify-content: center;
    justify-content: space-evenly;
  }
  .card-data {
    display: grid;
    color: white;
    padding: 10px;
    width: 280px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    row-gap: 10px;
    column-gap: 15px;
  }

  .difficulty {
    font-size: 20px;
    grid-area: 1 / 1 / 2 / 2;
  }
  .difficulty-data {
    font-size: 16px;
    grid-area: 1 / 2 / 2 / 3;
  }
  .distance {
    font-size: 20px;
    grid-area: 2 / 1 / 3 / 2;
  }
  .distance-data {
    font-size: 16px;
    grid-area: 2 / 2 / 3 / 3;
  }
  .ubication {
    font-size: 20px;
    grid-area: 3 / 1 / 4 / 2;
  }
  .ubication-data {
    font-size: 16px;
    grid-area: 3 / 2 / 4 / 3;
  }
  .avatar {
    grid-area: 1 / 3 / 4 / 4;
  }
`;
export default RouteCardStyled;
