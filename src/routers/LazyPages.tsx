import { lazy } from "react";

export const LazyLoginPage = lazy(
  () => import("../components/pages/LoginPage/LoginPage.js")
);

export const LazyRoutesPage = lazy(
  () => import("../components/pages/RoutesPage/RoutesPage.js")
);
