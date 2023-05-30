import styled from "styled-components";

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  align-items: center;
  box-shadow: 0px 0px 24px 0px #00000047;

  .logo {
    &__create,
    &__logout {
      display: flex;
      justify-content: center;
      width: 48px;
      height: 48px;
      align-items: center;
      background-color: transparent;
    }

    &__home {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default NavigationStyled;
