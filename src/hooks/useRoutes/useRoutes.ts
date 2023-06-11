import axios from "axios";
import { apiUrl } from "../useUser/useUser";
import { RouteStructure } from "../../store/routes/types";
import { useAppDispatch, useAppSelector } from "../../store";
import { paths } from "../../routers/paths/paths";
import { useCallback, useMemo } from "react";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const useRoutes = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.userStore);

  const requestConfig = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    [token]
  );

  const getRoutes = useCallback(
    async (
      skip: number,
      limit: number,
      filter?: string,
      filterValue?: string
    ): Promise<{ routes: RouteStructure[]; totalRoutes: number }> => {
      let url = `${apiUrl}${paths.routes}?limit=${limit}&skip=${skip}`;

      if (filter) {
        url += `&filter=${filter}&filterValue=${filterValue}`;
      }
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.get<{
          routes: RouteStructure[];
          totalRoutes: number;
        }>(`${url}`, requestConfig);

        dispatch(hideLoadingActionCreator());

        return { routes: data.routes, totalRoutes: data.totalRoutes };
      } catch (error) {
        dispatch(hideLoadingActionCreator());
        dispatch(
          showFeedbackActionCreator({
            message: "Sorry, Routes could not be loaded",
            isError: true,
          })
        );
        throw new Error("Sorry, Routes could not be loaded");
      }
    },
    [dispatch, requestConfig]
  );

  const removeRoute = async (routeId: string | undefined) => {
    try {
      dispatch(showLoadingActionCreator());
      await axios.delete(`${apiUrl}${paths.routes}/${routeId}`, requestConfig);

      dispatch(hideLoadingActionCreator());
      dispatch(
        showFeedbackActionCreator({
          message: "The selected route has been deleted succesfully",
          isError: false,
        })
      );
    } catch (error) {
      dispatch(
        showFeedbackActionCreator({
          message: "Sorry, the selected route could not be deleted",
          isError: true,
        })
      );
      dispatch(hideLoadingActionCreator());
    }
  };
  const addRoute = async (newRoute: Partial<RouteStructure>) => {
    try {
      const { data } = await axios.post<{ route: RouteStructure }>(
        `${apiUrl}${paths.routes}/addRoute`,
        newRoute,
        requestConfig
      );

      dispatch(
        showFeedbackActionCreator({
          isError: false,
          message: "The route has been added succesfully",
        })
      );

      return data.route;
    } catch (error) {
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: "Could not add the desired route",
        })
      );
    }
  };
  return { getRoutes, removeRoute, addRoute };
};

export default useRoutes;
