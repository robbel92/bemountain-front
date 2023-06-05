import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import { paths } from "./paths/paths";
import { Suspense } from "react";
import { LazyLoginPage, LazyRoutesPage } from "./LazyPages";
import PageNotFound from "../components/pages/PageNotFound/PageNotFound";

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
        path: "/notfound",

        element: <PageNotFound />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
