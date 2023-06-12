import styled from "styled-components";

const NavigationStyled = styled.nav`
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  align-items: center;

  @keyframes scaleGuai {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .active {
    animation-name: scaleGuai;
    animation-duration: 0.1s;
    transform: scale(1.2);
    border-radius: 10px;
    border: 3.5px outset #e9c696;
    padding: 1px 5px;
  }

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
