import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import ContainerStyled from "../../components/shared/ContainerStyled";
import useRoutes from "../../hooks/useRoutes/useRoutes";
import { useAppDispatch } from "../../store";
import { RouteStructure } from "../../store/routes/types";
import CreateRoutePageStyled from "./CreateRoutePageStyled";
import { paths } from "../../routers/paths/paths";
import { addRouteActionCreator } from "../../store/routes/routesSlice";

const CreateRoutePage = (): React.ReactElement => {
  const { addRoute } = useRoutes();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const actionOnSubmit = async (newRoute: Partial<RouteStructure>) => {
    const route = await addRoute(newRoute);

    dispatch(addRouteActionCreator(route as RouteStructure));
    navigate(paths.home);
  };

  return (
    <CreateRoutePageStyled className="create">
      <Header />
      <ContainerStyled>
        <h1 className="create__title">Create your route</h1>;
        <Form actionOnSubmit={actionOnSubmit} />
      </ContainerStyled>
    </CreateRoutePageStyled>
  );
};

export default CreateRoutePage;
