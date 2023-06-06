import styled from "styled-components";

const PageNotFoundStyled = styled.main`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/media/background-login-page.webp");
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .back-home {
    background-color: ${(props) => props.theme.colors.button};
    justify-content: center;
    text-align: center;
    color: white;
    font-weight: 600;
    border-radius: 5px;
    border: solid 2px white;
    font-size: 15px;
    padding: 10px 30px;
  }
  p {
    color: white;
    background-color: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    font-size: 60px;
    font-weight: 800;
  }
`;

export default PageNotFoundStyled;
