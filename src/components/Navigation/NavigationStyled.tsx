import styled from "styled-components";

const NavigationStyled = styled.nav`
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  align-items: center;
  background-color: #0000008f;

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
      &:disabled {
        opacity: 0.5;
      }
    }
  }
`;

export default NavigationStyled;
