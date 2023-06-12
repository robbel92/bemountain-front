import styled from "styled-components";

const FilterStyled = styled.select`
  padding: 0.625rem 0.625rem;
  width: 340px;
  backdrop-filter: blur(50px);
  background: transparent;
  color: #ffffff;
  box-shadow: none;
  font-weight: 600;
  letter-spacing: 2px;
  border-radius: 5px;
  border: 1px solid white;
  font-size: 12px;

  ::placeholder {
    font-style: light;
    font-weight: 100;
    font-size: 14px;
    color: #ffffff;
  }

  option {
    background-color: black;
  }
`;
export default FilterStyled;
