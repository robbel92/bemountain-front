import { lazy } from "react";

export const LazyLoginPage = lazy(
  () => import("../pages/LoginPage/LoginPage.js")
);

export const LazyRoutesPage = lazy(
  () => import("../pages/RoutesPage/RoutesPage.js")
);

export const LazyPageNotFoundPage = lazy(
  () => import("../pages/PageNotFound/PageNotFound.js")
);
