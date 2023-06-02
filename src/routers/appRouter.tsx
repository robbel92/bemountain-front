import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import { paths } from "./paths/paths";
import { Suspense } from "react";
import { LazyRoutesPage } from "./LazyPages";
import LoginPage from "../components/pages/LoginPage/LoginPage";

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

        element: (
          <Suspense>
            <LazyRoutesPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
