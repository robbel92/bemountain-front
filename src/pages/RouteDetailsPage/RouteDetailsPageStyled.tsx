import styled from "styled-components";

const RouteDetailsPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      to bottom,
      rgba(115, 115, 120, 0.52),
      rgba(0, 0, 0, 0.73)
    ),
    url("/media/background.webp");
  background-size: cover;
  justify-content: center;

  button {
    background: transparent;
  }

  .details {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .description {
    font-size: 20px;
    color: white;
  }

  .card-container {
    display: flex;
    justify-content: center;
    border-radius: 5px;

    &__title {
      border-radius: 3px;
      text-transform: uppercase;
      white-space: pre-line;
      color: white;
      padding: 20px;
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
    box-shadow: 0px 0px 5px 4px #000000;
  }

  .difficulty {
    font-size: 20px;
    grid-area: 1 / 1 / 2 / 2;
  }
  .difficulty-data {
    font-size: 16px;
    grid-area: 1 / 2 / 2 / 3;
    word-break: break-word;
  }
  .distance {
    font-size: 20px;
    grid-area: 2 / 1 / 3 / 2;
  }
  .distance-data {
    font-size: 16px;
    grid-area: 2 / 2 / 3 / 3;
    word-break: break-word;
  }
  .ubication {
    font-size: 20px;
    grid-area: 3 / 1 / 4 / 2;
  }
  .ubication-data {
    font-size: 16px;
    grid-area: 3 / 2 / 4 / 3;
    word-break: break-word;
  }
  .photo {
    grid-area: 1 / 3 / 4 / 4;
    justify-self: center;
    margin-top: 30px;
  }
  .photo-data {
    grid-area: 1 / 3 / 1 / 4;
    justify-self: center;
  }
`;

export default RouteDetailsPageStyled;
