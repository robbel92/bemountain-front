import { useEffect } from "react";
import { routesMock } from "../../../mocks/routeMocks/routeMocks";
import { useAppDispatch, useAppSelector } from "../../../store";
import { loadRoutesActionCreator } from "../../../store/routes/routesSlice";
import RoutesPageStyled from "./RoutesPageStyled";
import RoutesList from "../../RoutesList/RoutesList";

const RoutesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { routes } = useAppSelector((state) => state.routesStore);

  useEffect(() => {
    (async () => {
      dispatch(loadRoutesActionCreator(routesMock));
    })();
  }, [dispatch]);

  return (
    <RoutesPageStyled>
      <h2>World Routes</h2>
      <RoutesList routes={routes} />
    </RoutesPageStyled>
  );
};

export default RoutesPage;
