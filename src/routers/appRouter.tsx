import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import { paths } from "./paths/paths";
import { Suspense } from "react";
import { LazyLoginPage, LazyRoutesPage } from "./LazyPages";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import CreateRoutePage from "../pages/CreateRoutePage/CreateRoutePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Navigate to={paths.login} replace />,
      },
      {
        path: paths.login,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: paths.home,

        element: (
          <Suspense>
            <LazyRoutesPage />
          </Suspense>
        ),
      },
      {
        path: "/form",
        element: <CreateRoutePage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
