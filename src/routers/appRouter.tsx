import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import { paths } from "./paths/paths";
import { Suspense } from "react";
import {
  LazyCreateRoutePage,
  LazyLoginPage,
  LazyModifyRoutePage,
  LazyPageNotFoundPage,
  LazyRouteDetailsPage,
  LazyRoutesPage,
} from "./LazyPages";

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
        path: paths.routes,

        element: (
          <Suspense>
            <LazyRoutesPage />
          </Suspense>
        ),
      },
      {
        path: paths.createForm,
        element: (
          <Suspense>
            <LazyCreateRoutePage />
          </Suspense>
        ),
      },
      {
        path: "/routes/:routeId",
        element: (
          <Suspense>
            <LazyRouteDetailsPage />
          </Suspense>
        ),
      },
      {
        path: "/routes/modifyRoute",
        element: (
          <Suspense>
            <LazyModifyRoutePage />
          </Suspense>
        ),
      },
      {
        path: "/*",
        element: (
          <Suspense>
            <LazyPageNotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
