import { useEffect } from "react";
import useRoutes from "../../hooks/useRoutes/useRoutes";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  loadCurrentRouteActionCreator,
  removeRouteActionCreator,
} from "../../store/routes/routesSlice";
import RouteDetailsPageStyled from "./RouteDetailsPageStyled";
import Header from "../../components/Header/Header";
import ContainerStyled from "../../components/shared/ContainerStyled";
import Button from "../../components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { paths } from "../../routers/paths/paths";

const RouteDetailsPage = (): React.ReactElement => {
  const { getRoute, removeRoute } = useRoutes();
  const dispatch = useAppDispatch();
  const route = useAppSelector((state) => state.routesStore.currentRoute);
  const { id } = useAppSelector((state) => state.userStore);
  const navigate = useNavigate();

  const handleOnDelete = async () => {
    await removeRoute(route.id);
    dispatch(removeRouteActionCreator({ routeId: route.id }));
    navigate(paths.routes);
  };

  const { pathname } = useLocation();

  const routeId = pathname.substring(8, 32);

  useEffect(() => {
    (async () => {
      const route = await getRoute(routeId);
      if (!route) {
        return;
      }
      dispatch(loadCurrentRouteActionCreator(route));
    })();
  }, [dispatch, getRoute, routeId]);

  return (
    <RouteDetailsPageStyled>
      <Header />
      <ContainerStyled>
        <article className="details">
          <h2 className="card-container__title">{route.name}</h2>
          <div className="card-container">
            <img
              src={route.photo}
              alt={`Photography of ${route.name} mountain route`}
              width="340"
              height="453"
              className="card-container__image"
              loading="eager"
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
          <p className="description">{route.description}</p>
        </article>
      </ContainerStyled>
    </RouteDetailsPageStyled>
  );
};

export default RouteDetailsPage;
