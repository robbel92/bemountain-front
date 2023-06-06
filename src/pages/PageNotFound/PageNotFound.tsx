import { useNavigate } from "react-router-dom";
import PageNotFoundStyled from "./PageNotFoundStyled";
import Header from "../../components/Header/Header";
import ContainerStyled from "../../components/shared/ContainerStyled";
import Button from "../../components/Button/Button";

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
          aria-label="back home"
        >
          BACK HOME{" "}
        </Button>
      </ContainerStyled>
    </PageNotFoundStyled>
  );
};
export default PageNotFound;
