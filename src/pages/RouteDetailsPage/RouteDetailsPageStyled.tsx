import styled from "styled-components";

const RouteDetailsPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      to bottom,
      rgba(30, 30, 32, 0.768),
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
      font-size: 25px;
      letter-spacing: 0.15px;
      font-weight: 600;
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
    border-bottom: solid 2px white;
    padding-bottom: 25px;
    width: 100%;
    gap: 10px 10px;

    grid-template-rows: repeat(4, 1fr);
    align-items: center;
    width: 100%;
    margin: 15px;
  }
  .photo {
    overflow: hidden;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    box-shadow: 0px 0px 5px 0px #000000;
  }

  .difficulty {
    font-size: 18px;
    grid-area: 1 / 1 / 2 / 2;
    font-weight: 600;
  }
  .difficulty-data {
    font-size: 16px;
    font-weight: 600;
    color: #ef9d7f;
    grid-area: 1 / 2 / 2 / 3;
    word-break: break-word;
  }
  .distance {
    font-size: 18px;
    grid-area: 2 / 1 / 3 / 2;
    font-weight: 600;
  }
  .distance-data {
    color: #ef9d7f;
    font-weight: 600;
    font-size: 16px;
    grid-area: 2 / 2 / 3 / 3;
    word-break: break-word;
  }
  .ubication {
    font-size: 18px;
    font-weight: 600;
    grid-area: 3 / 1 / 4 / 2;
  }
  .ubication-data {
    font-size: 16px;
    font-weight: 600;
    color: #ef9d7f;
    grid-area: 3 / 2 / 4 / 3;
  }
  .elevationGain {
    font-size: 18px;
    font-weight: 600;
    grid-area: 4 / 1 / 4 / 2;
  }
  .elevationGain-data {
    font-size: 16px;
    font-weight: 600;
    color: #ef9d7f;
    grid-area: 4 / 2 / 4 / 3;
    word-break: break-word;
  }
  .photo {
    grid-area: 1 / 3 / 6 / 4;
    justify-self: center;
    margin-top: 30px;
  }
  .photo-data {
    grid-area: 1 / 3 / 3 / 4;
    justify-self: center;
    text-align: center;
    font-weight: 600;
  }
`;

export default RouteDetailsPageStyled;
