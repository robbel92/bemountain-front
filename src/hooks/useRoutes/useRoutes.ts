import axios from "axios";
import { apiUrl } from "../useUser/useUser";
import { RouteStructure } from "../../store/routes/types";
import { useAppSelector } from "../../store";
import { paths } from "../../routers/paths/paths";
import { useCallback, useMemo } from "react";

const useRoutes = () => {
  const { token } = useAppSelector((state) => state.userStore);

  const requestConfig = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    [token]
  );

  const getRoutes = useCallback(async (): Promise<RouteStructure[]> => {
    const { data: Routes } = await axios.get<RouteStructure[]>(
      `${apiUrl}${paths.routes}`,
      requestConfig
    );

    return Routes;
  }, [requestConfig]);
  return { getRoutes };
};

export default useRoutes;
