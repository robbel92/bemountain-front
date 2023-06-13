import { useNavigate } from "react-router-dom";
import useRoutes from "../../hooks/useRoutes/useRoutes";
import { useAppDispatch, useAppSelector } from "../../store";
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
  const { id } = useAppSelector((state) => state.userStore);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOnDetails = () => {
    navigate(`/routes/${route.id}`);
  };

  const handleOnDelete = async () => {
    await removeRoute(route.id);

    dispatch(removeRouteActionCreator({ routeId: route.id }));
  };

  return (
    <RouteCardStyled>
      <div
        className="card-container"
        onClick={handleOnDetails}
        onKeyUp={handleOnDetails}
        role="button"
        tabIndex={0}
      >
        <h2 className="card-container__title">{route.name}</h2>
        <img
          src={route.photo}
          alt={`Photography of ${route.name} mountain route`}
          width="340"
          height="453"
          className="card-container__image"
          loading={isLazy}
        />
      </div>
      {route.author === id && (
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
      )}
      <div className="card-data">
        <h2 className="difficulty">Difficulty</h2>
        <span className="difficulty-data" aria-label="difficulty">
          {route.difficulty}
        </span>
        <h2 className="distance">Distance</h2>
        <span className="distance-data">{route.distance}Km</span>
        <h2 className="ubication">Ubication</h2>
        <span className="ubication-data">{route.ubication}</span>
        <img
          src={route.authorImage}
          alt={`photography of ${route.authorName}`}
          width={48}
          height={48}
          className="photo"
        />
        <span className="photo-data">{route.authorName}</span>
      </div>
    </RouteCardStyled>
  );
};

export default RouteCard;
