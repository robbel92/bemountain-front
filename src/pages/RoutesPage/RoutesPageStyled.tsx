import styled from "styled-components";

const RoutesPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/media/background-login-page.webp");
  background-size: cover;
  justify-content: center;

  .title-page {
    color: white;
    font-size: 24px;
  }
`;
export default RoutesPageStyled;
