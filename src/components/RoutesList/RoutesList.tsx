import { RouteStructure } from "../../store/routes/types";

interface RoutesListProps {
  routes: RouteStructure[];
}

const RoutesList = ({ routes }: RoutesListProps): React.ReactElement => {
  return (
    <div>
      <h2>Routes</h2>
      <ul className="routes-list">
        {routes.map((route) => (
          <li className="robotList-card" key={route.id}>
            <h2>{route.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoutesList;
