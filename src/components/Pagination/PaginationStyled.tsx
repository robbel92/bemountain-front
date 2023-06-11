import styled from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;

  .pagination {
    &__count {
      color: white;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 3px;
    }
  }
  button {
    display: flex;
    align-items: center;
    background-color: rgba(37, 37, 37, 0.78);
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

    &:disabled {
      visibility: hidden;
    }
  }
`;

export default PaginationStyled;
