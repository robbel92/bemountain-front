import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import RoutesList from "../../components/RoutesList/RoutesList";
import ContainerStyled from "../../components/shared/ContainerStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRoutesActionCreator } from "../../store/routes/routesSlice";
import RoutesPageStyled from "./RoutesPageStyled";
import useRoutes from "../../hooks/useRoutes/useRoutes";
import Pagination from "../../components/Pagination/Pagination";

const RoutesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getRoutes } = useRoutes();
  const { isLogged } = useAppSelector((state) => state.userStore);

  const limit = 5;
  const [count, setCount] = useState(0);
  const [skip, setSkip] = useState(0);

  const nextPage = () => {
    setSkip(skip + limit);
    setCount(count + 1);
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    setSkip(skip - limit);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    (async () => {
      const { routes, totalRoutes } = await getRoutes(skip, limit);

      if (routes) {
        dispatch(
          loadRoutesActionCreator({ routes: routes, totalRoutes: totalRoutes })
        );

        const preconnectElement = await document.createElement("link");
        preconnectElement.rel = "preload";
        preconnectElement.as = "image";
        preconnectElement.href = routes[0].photo;

        const parent = document.head;
        const firstChild = document.head.firstChild;
        parent.insertBefore(preconnectElement, firstChild);
      }
    })();
  }, [dispatch, getRoutes, isLogged, limit, skip]);

  return (
    <RoutesPageStyled>
      <Header />
      <ContainerStyled>
        <h2 className="title-page">World Routes</h2>
        <RoutesList />
        <Pagination
          count={count}
          skip={skip}
          onClickNextPage={nextPage}
          onClickPreviousPage={previousPage}
        />
      </ContainerStyled>
    </RoutesPageStyled>
  );
};

export default RoutesPage;