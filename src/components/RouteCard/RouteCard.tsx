import useRoutes from "../../hooks/useRoutes/useRoutes";
import { useAppDispatch } from "../../store";
import { removeRouteActionCreator } from "../../store/routes/routesSlice";
import { RouteStructure } from "../../store/routes/types";
import Button from "../Button/Button";
import RouteCardStyled from "./RouteCardStyled";

interface RouteCardProps {
  route: Partial<RouteStructure>;
  isLazy: "eager" | "lazy";
}

const RouteCard = ({ route, isLazy }: RouteCardProps): React.ReactElement => {
  const { removeRoute } = useRoutes();
  const dispatch = useAppDispatch();
  const handleOnDelete = () => {
    dispatch(removeRouteActionCreator({ routeId: route.id }));
    removeRoute(route.id);
  };
  return (
    <RouteCardStyled>
      <div className="card-container">
        <h2 className="card-container__title">{route.name}</h2>
        <img
          src={route.photo}
          alt={`Photography of ${route.name} mountain route`}
          width="300"
          height="400"
          className="card-container__image"
          loading={isLazy}
        />
      </div>
      <div className="card-buttons">
        <Button aria_label="create" type="button">
          <img
            src="/media/icon-edit.svg"
            alt="icon with pencil edit"
            width={48}
            height={48}
          />
        </Button>
        <Button
          aria_label="delete"
          actionOnClick={handleOnDelete}
          type="button"
        >
          <img
            src="/media/icon-delete.svg"
            alt="icon with bin"
            width={48}
            height={48}
          />
        </Button>
      </div>
      <div className="card-data">
        <h2 className="difficulty">Dificultad</h2>
        <span className="difficulty-data">{route.difficulty}</span>
        <h2 className="distance">Distancia</h2>
        <span className="distance-data">{route.distance}Km</span>
        <h2 className="ubication">Ubicacíon</h2>
        <span className="ubication-data">{route.ubication}</span>
      </div>
    </RouteCardStyled>
  );
};

export default RouteCard;
