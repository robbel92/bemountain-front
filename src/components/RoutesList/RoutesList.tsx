import { useAppSelector } from "../../store";
import RouteCard from "../RouteCard/RouteCard";
import RoutesListStyled from "./RoutesListStyled";

const RoutesList = (): React.ReactElement => {
  const { routes } = useAppSelector((state) => state.routesStore);
  return (
    <RoutesListStyled>
      <h2 className="routes__title">Routes</h2>
      {routes.length === 0 && <p className="notFound">Routes not found</p>}
      <ul className="routes__list">
        {routes.map((route, index) => (
          <li className="routes__card" key={route.id}>
            <RouteCard
              route={route}
              isLazy={index < 2 ? "lazy" : "eager"}
            ></RouteCard>
          </li>
        ))}
      </ul>
    </RoutesListStyled>
  );
};

export default RoutesList;
