import styled from "styled-components";

const ModifyRoutePageStyled = styled.main`
  background-image: url("/media/background.webp");
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .modify {
    &__title {
      font-size: 25px;
      font-weight: 800;
      color: white;
      text-transform: uppercase;
    }
  }
`;
export default ModifyRoutePageStyled;
