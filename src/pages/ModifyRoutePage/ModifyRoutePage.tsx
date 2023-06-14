import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import ContainerStyled from "../../components/shared/ContainerStyled";
import useRoutes from "../../hooks/useRoutes/useRoutes";
import { useAppSelector } from "../../store";
import { RouteStructure } from "../../store/routes/types";
import ModifyRoutePageStyled from "./ModifyRoutePageStyled";
import { paths } from "../../routers/paths/paths";

const ModifyRoutePage = (): React.ReactElement => {
  const currentRoute = useAppSelector(
    (state) => state.routesStore.currentRoute
  );
  const { modifyRoute } = useRoutes();

  const navigate = useNavigate();

  const actionOnSubmit = async (
    routeModify: RouteStructure | Partial<RouteStructure>
  ) => {
    await modifyRoute(routeModify as RouteStructure);

    navigate(paths.routes);
  };

  return (
    <ModifyRoutePageStyled className="modify">
      <Header />
      <ContainerStyled>
        <h1 className="modify__title">Modify your route</h1>
        <Form actionOnSubmit={actionOnSubmit} route={currentRoute} />
      </ContainerStyled>
    </ModifyRoutePageStyled>
  );
};

export default ModifyRoutePage;
