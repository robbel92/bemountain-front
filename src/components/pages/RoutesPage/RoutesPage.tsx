import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { loadRoutesActionCreator } from "../../../store/routes/routesSlice";
import RoutesPageStyled from "./RoutesPageStyled";
import RoutesList from "../../RoutesList/RoutesList";
import useRoutes from "../../../hooks/useRoutes/useRoutes";
import Header from "../../Header/Header";
import ContainerStyled from "../../shared/ContainerStyled";

const RoutesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getRoutes } = useRoutes();
  const { routes } = useAppSelector((state) => state.routesStore);

  useEffect(() => {
    (async () => {
      const routes = await getRoutes();
      if (routes) dispatch(loadRoutesActionCreator(routes));
    })();
  }, [dispatch, getRoutes]);

  return (
    <RoutesPageStyled>
      <Header />
      <ContainerStyled>
        <h2>World Routes</h2>
        <RoutesList routes={routes} />
      </ContainerStyled>
    </RoutesPageStyled>
  );
};

export default RoutesPage;
