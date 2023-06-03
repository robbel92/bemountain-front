import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { loadRoutesActionCreator } from "../../../store/routes/routesSlice";
import RoutesPageStyled from "./RoutesPageStyled";
import RoutesList from "../../RoutesList/RoutesList";
import useRoutes from "../../../hooks/useRoutes/useRoutes";

const RoutesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getRoutes } = useRoutes();
  const { routes } = useAppSelector((state) => state.routesStore);

  useEffect(() => {
    (async () => {
      dispatch(loadRoutesActionCreator(await getRoutes()));
    })();
  }, [dispatch, getRoutes]);

  return (
    <RoutesPageStyled>
      <h2>World Routes</h2>
      <RoutesList routes={routes} />
    </RoutesPageStyled>
  );
};

export default RoutesPage;
