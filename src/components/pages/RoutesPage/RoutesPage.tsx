import { useEffect } from "react";
import { routesMock } from "../../../mocks/routeMocks/routeMocks";
import { useAppDispatch } from "../../../store";
import { loadRoutesActionCreator } from "../../../store/routes/routesSlice";
import RoutesPageStyled from "./RoutesPageStyled";

const RoutesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(loadRoutesActionCreator(routesMock));
    })();
  }, [dispatch]);

  return (
    <RoutesPageStyled>
      <h2>World Routes</h2>
    </RoutesPageStyled>
  );
};

export default RoutesPage;
