import styled from "styled-components";

const CreateRoutePageStyled = styled.main`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/media/background-login-page.webp");
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .create {
    &__title {
      font-size: 30px;
      font-weight: 800;
      color: white;
      text-transform: uppercase;
    }
  }
`;
export default CreateRoutePageStyled;
