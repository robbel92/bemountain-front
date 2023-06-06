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

  const getRoutes = useCallback(async (): Promise<
    RouteStructure[] | undefined
  > => {
    try {
      dispatch(showLoadingActionCreator());

      const { data: Routes } = await axios.get<RouteStructure[] | undefined>(
        `${apiUrl}${paths.routes}`,
        requestConfig
      );

      dispatch(hideLoadingActionCreator());

      return Routes;
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
  }, [dispatch, requestConfig]);
  return { getRoutes };
};

export default useRoutes;
