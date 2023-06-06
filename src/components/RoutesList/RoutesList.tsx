import { RouteStructure } from "../../store/routes/types";
import RouteCard from "../RouteCard/RouteCard";
import RoutesListStyled from "./RoutesListStyled";

interface RoutesListProps {
  routes: RouteStructure[];
}

const RoutesList = ({ routes }: RoutesListProps): React.ReactElement => {
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
