import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import { paths } from "./paths/paths";
import RoutesPage from "../components/pages/RoutesPage/RoutesPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={paths.login} replace />,
      },
      {
        path: paths.login,
        element: <LoginPage />,
      },
      {
        path: paths.home,
        element: <RoutesPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
