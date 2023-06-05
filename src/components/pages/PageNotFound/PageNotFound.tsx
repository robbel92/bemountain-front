import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import Header from "../../Header/Header";
import ContainerStyled from "../../shared/ContainerStyled";
import PageNotFoundStyled from "./PageNotFoundStyled";

const PageNotFound = (): React.ReactElement => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/home");
  };

  return (
    <PageNotFoundStyled>
      <Header />
      <ContainerStyled>
        <p>Page not found, come back home, we miss you.</p>
        <Button
          actionOnClick={handleOnClick}
          type="button"
          className="back-home"
        >
          BACK HOME{" "}
        </Button>
      </ContainerStyled>
    </PageNotFoundStyled>
  );
};
export default PageNotFound;
