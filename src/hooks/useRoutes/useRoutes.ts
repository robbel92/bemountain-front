import axios from "axios";
import { apiUrl } from "../useUser/useUser";
import { RouteStructure } from "../../store/routes/types";
import { useAppSelector } from "../../store";
import { paths } from "../../routers/paths/paths";

const useRoutes = () => {
  const { token } = useAppSelector((state) => state.userStore);

  const requestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getRoutes = async (): Promise<RouteStructure[]> => {
    const { data: Routes } = await axios.get<RouteStructure[]>(
      `${apiUrl}${paths.routes}`,
      requestConfig
    );

    return Routes;
  };
  return { getRoutes };
};

export default useRoutes;
