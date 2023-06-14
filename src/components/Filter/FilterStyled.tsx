import styled from "styled-components";

const FilterStyled = styled.select`
  padding: 0.625rem 0.625rem;
  width: 350px;
  backdrop-filter: blur(50px);
  background: transparent;
  color: #ffffff;
  box-shadow: none;
  text-align: center;
  font-weight: 600;
  letter-spacing: 2px;
  border-radius: 5px;
  border-right: 20px solid transparent;
  font-size: 18px;
  box-shadow: 0px 0px 5px 0px #ffffff5c;

  ::placeholder {
    font-style: light;
    font-weight: 100;
    font-size: 14px;

    color: #ffffff;
  }

  option {
    background-color: #ffffff;
    color: black;
  }
`;
export default FilterStyled;
