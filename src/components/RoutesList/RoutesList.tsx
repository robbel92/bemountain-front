import { useAppSelector } from "../../store";
import RouteCard from "../RouteCard/RouteCard";
import RoutesListStyled from "./RoutesListStyled";

const RoutesList = (): React.ReactElement => {
  const { routes } = useAppSelector((state) => state.routesStore);
  return (
    <RoutesListStyled>
      <h2>Routes</h2>
      <ul className="routes-list">
        {routes.map((route, index) => (
          <li className="routeList-card" key={route.id}>
            <RouteCard
              route={route}
              isLazy={index === 0 ? "eager" : "lazy"}
            ></RouteCard>
          </li>
        ))}
      </ul>
    </RoutesListStyled>
  );
};

export default RoutesList;
