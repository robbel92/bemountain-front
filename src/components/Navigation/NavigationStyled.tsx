import styled from "styled-components";

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  box-shadow: 0px 0px 24px 0px #00000047;

  a {
    display: flex;
    justify-content: center;
    width: 48px;
    height: 48px;
    align-items: center;
    background-color: transparent;
  }

  .home {
    width: 90px;
    height: 30px;
  }
`;

export default NavigationStyled;
