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
  const { isLogged } = useAppSelector((state) => state.userStore);

  useEffect(() => {
    (async () => {
      const routes = await getRoutes();
      if (routes) {
        dispatch(loadRoutesActionCreator(routes));

        const preconnectElement = await document.createElement("link");
        preconnectElement.rel = "preload";
        preconnectElement.as = "image";
        preconnectElement.href = routes[0].photo;

        const parent = document.head;
        const firstChild = document.head.firstChild;
        parent.insertBefore(preconnectElement, firstChild);
      }
    })();
  }, [dispatch, getRoutes, isLogged]);

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
