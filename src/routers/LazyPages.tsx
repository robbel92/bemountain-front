import { lazy } from "react";

export const LazyLoginPage = lazy(
  () => import("../pages/LoginPage/LoginPage.js")
);

export const LazyRoutesPage = lazy(
  () => import("../pages/RoutesPage/RoutesPage.js")
);
