import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import RoutesList from "../../components/RoutesList/RoutesList";
import ContainerStyled from "../../components/shared/ContainerStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRoutesActionCreator } from "../../store/routes/routesSlice";
import RoutesPageStyled from "./RoutesPageStyled";
import useRoutes from "../../hooks/useRoutes/useRoutes";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";

const RoutesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getRoutes } = useRoutes();
  const { isLogged } = useAppSelector((state) => state.userStore);

  const limit = 5;
  const [count, setCount] = useState(0);
  const [skip, setSkip] = useState(0);
  const [filterValue, setFilterValue] = useState("");

  const nextPage = () => {
    setSkip(skip + limit);
    setCount(count + 1);
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    setSkip(skip - limit);
    setCount(count - 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const params = filterValue
      ? {
          skip: skip,
          limit: limit,
          filter: "difficulty",
          filterValue: filterValue,
        }
      : {
          skip: skip,
          limit: limit,
        };
    (async () => {
      const { routes, totalRoutes } = await getRoutes({ ...params });

      if (routes) {
        dispatch(
          loadRoutesActionCreator({ routes: routes, totalRoutes: totalRoutes })
        );

        const parent = document.head;
        const firstChild = document.head.firstChild;

        for (let i = 0; i < 5; i++) {
          const preconnectElement = document.createElement("link");
          preconnectElement.rel = "preload";
          preconnectElement.as = "image";
          preconnectElement.href = routes[i].photo;

          parent.insertBefore(preconnectElement, firstChild);
        }
      }
    })();
  }, [dispatch, filterValue, getRoutes, isLogged, limit, skip]);

  return (
    <RoutesPageStyled>
      <Header />
      <ContainerStyled>
        <div className="list-title">
          <h2 className="title-page">World Routes</h2>
          <Filter
            setFilterValue={setFilterValue}
            setSkip={setSkip}
            setCount={setCount}
          />
        </div>

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
