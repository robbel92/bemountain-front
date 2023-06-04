import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";

import { vi } from "vitest";
import {
  Navigate,
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

import LoginPage from "../pages/LoginPage/LoginPage";
import Layout from "./Layout";
import { paths } from "../../routers/paths/paths";

afterEach(() => {
  vi.clearAllMocks();
});

describe("Given a Layout component", () => {
  describe("When it is rendered and path location is different to '/login'", () => {
    test("Then it should show an image with bemount logo", () => {
      const altTextImage = "bemount web logo";

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Navigate to={paths.login} replace />,
            },
            {
              path: paths.login,
              element: <LoginPage />,
            },
          ],
        },
      ];

      const layoutRouter = createMemoryRouter(routes);

      renderWithProviders(
        <RouterProvider router={layoutRouter}></RouterProvider>
      );

      const imageExpected = screen.getByAltText(altTextImage);

      expect(imageExpected).toBeInTheDocument();
    });
  });
});
