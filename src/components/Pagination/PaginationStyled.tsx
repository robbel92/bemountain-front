import styled from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colors.button};
    justify-content: center;
    text-align: center;
    color: white;
    font-weight: 600;
    width: 120px;
    height: 40px;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 20px;
    padding: 20px 30px;
  }
`;

export default PaginationStyled;
