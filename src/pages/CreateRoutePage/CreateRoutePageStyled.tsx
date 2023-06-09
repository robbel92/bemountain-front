import styled from "styled-components";

const CreateRoutePageStyled = styled.main`
  background-image: url("/media/background-login-page3.webp");
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .create {
    &__title {
      font-size: 25px;
      font-weight: 800;
      color: white;
      text-transform: uppercase;
    }
  }
`;
export default CreateRoutePageStyled;
