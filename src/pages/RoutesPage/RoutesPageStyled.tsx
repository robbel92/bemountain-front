import styled from "styled-components";

const RoutesPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  background-image: url("/media/background.webp");
  background-size: cover;
  justify-content: center;

  .list-title {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    height: 115px;
  }

  .title-page {
    color: white;
    font-size: 40px;
  }
`;
export default RoutesPageStyled;
