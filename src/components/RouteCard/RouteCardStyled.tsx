import styled from "styled-components";

const RouteCardStyled = styled.article`
  button {
    background-color: transparent;
  }

  .card-container {
    display: flex;
    justify-content: center;
    border: solid 3px #efefef1c;
    border-radius: 8px;

    &__title {
      position: absolute;

      border-radius: 3px;
      text-transform: uppercase;
      white-space: pre-line;
      color: white;
      width: 340px;
      padding: 20px;
      background-image: linear-gradient(rgb(0, 0, 9), rgb(0 0 0 / 62%));
      border-bottom: solid 1px #ffffff78;
      font-size: 18px;
      letter-spacing: 0.15px;
      font-weight: 800;
      line-height: 24px;
      text-align: center;
      backdrop-filter: blur(2px);
    }
    &__image {
      border-radius: 5px;
    }
  }

  .card-buttons {
    display: flex;
    padding: 10px 30px;
    width: 100%;
    justify-content: center;
    justify-content: space-evenly;
  }
  .card-data {
    display: grid;
    color: white;
    padding: 15px;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    gap: 15px 15px;
    border-radius: 0 0 6px 6px;
    width: 100%;
  }
  .photo {
    overflow: hidden;
    width: 60px;
    height: 60px;

    border-radius: 60px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
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
  .photo {
    grid-area: 1 / 3 / 4 / 4;
    justify-self: center;
    margin-top: 30px;
  }
  .photo-data {
    grid-area: 1 / 3 / 1 / 4;
  }
`;
export default RouteCardStyled;
