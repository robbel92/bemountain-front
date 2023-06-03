import { RouteStructure } from "../../store/routes/types";
import RouteCardStyled from "./RouteCardStyled";

interface RouteCardProps {
  route: RouteStructure;
}

const RouteCard = ({ route }: RouteCardProps): React.ReactElement => {
  return (
    <RouteCardStyled>
      <div className="card-container">
        <h2 className="card-container__title">{route.name}</h2>
        <img
          src={route.photo}
          alt={`Photography of ${route.name} mountain route`}
          width="280"
          height="320"
          className="card-container__image"
        />
      </div>
      <div className="card-buttons">
        <button>
          <img src="/media/icon-edit.svg" alt="" />
        </button>
        <button>
          <img src="/media/icon-delete.svg" alt="" />
        </button>
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
