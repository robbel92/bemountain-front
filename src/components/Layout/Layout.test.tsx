import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "./Layout";
import { vi } from "vitest";
import {
  Navigate,
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { paths } from "../../routers/paths/paths";
import App from "../App/App";
import LoginPage from "../pages/LoginPage/LoginPage";

afterEach(() => {
  vi.clearAllMocks();
});

describe("Given a Layout component", () => {
  describe("When it is rendered and path location is different to '/login'", () => {
    test("Then it should show an image with bemount logo", () => {
      const altTextImage = "bemount web logo";

      renderWithProviders(wrapWithRouter(<Layout />));

      const imageExpected = screen.getByAltText(altTextImage);

      expect(imageExpected).toBeInTheDocument();
    });
  });
  describe("When it is rendered and path location is '/login'", () => {
    test("Then it should show a heading with test 'Log in to enjoy the mountains'", () => {
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
          ],
        },
      ];

      const layoutRouter = createMemoryRouter(routes);
      const headingText = "Log in to enjoy the mountains";

      renderWithProviders(
        <RouterProvider router={layoutRouter}></RouterProvider>
      );
      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
        level: 1,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
