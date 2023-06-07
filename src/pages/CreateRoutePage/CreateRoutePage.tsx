import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import ContainerStyled from "../../components/shared/ContainerStyled";
import CreateRoutePageStyled from "./CreateRoutePageStyled";

const CreateRoutePage = (): React.ReactElement => {
  return (
    <CreateRoutePageStyled className="create">
      <Header />
      <ContainerStyled>
        <h1 className="create__title">Create your route</h1>;
        <Form />
      </ContainerStyled>
    </CreateRoutePageStyled>
  );
};

export default CreateRoutePage;
