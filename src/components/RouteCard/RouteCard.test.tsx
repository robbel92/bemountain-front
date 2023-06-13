import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import RouteCard from "./RouteCard";
import { routesMock, routesNamesMock } from "../../mocks/routeMocks/routeMocks";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { tokenMock } from "../../mocks/userMocks/userMocks";
import RouteDetailsPage from "../../pages/RouteDetailsPage/RouteDetailsPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { server } from "../../mocks/server";
import { variantsHandlers } from "../../mocks/handlers";

beforeAll(() => {
  vi.clearAllMocks();
});

describe("Given a RouteCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the name of the route", async () => {
      server.resetHandlers(...variantsHandlers);
      const nameRoute = routesMock[0].name;
      renderWithProviders(
        wrapWithRouter(<RouteCard route={routesMock[0]} isLazy="lazy" />),
        {
          userStore: {
            id: routesMock[0].author,
            image: "",
            name: "",
            token: tokenMock,
            isLogged: true,
          },
        }
      );

      const expectedHeading = screen.getByRole("heading", {
        name: nameRoute,
        level: 2,
      });

      expect(expectedHeading).toBeInTheDocument();
      const deleteButton = screen.getByRole("button", {
        name: "delete",
      });

      await userEvent.click(deleteButton);
    });
  });
  describe("When it is rendered and the user clicks on image", () => {
    test("Then it should shows a page with the route details", async () => {
      const routes = [
        {
          path: "/",
          element: <RouteCard route={routesNamesMock[0]} isLazy={"eager"} />,
        },
        {
          path: "/routes/:routeId",
          element: <RouteDetailsPage />,
        },
      ];

      const routeCardRouter = createMemoryRouter(routes);

      renderWithProviders(
        <RouterProvider router={routeCardRouter}></RouterProvider>,
        {
          routesStore: {
            currentRoute: routesNamesMock[0],
            routes: routesNamesMock,
            totalRoutes: routesNamesMock.length,
          },
        }
      );

      const imageClickable = screen.getByAltText(
        `Photography of ${routesNamesMock[0].name} mountain route`
      );

      await userEvent.click(imageClickable);

      const description = screen.getByText(routesNamesMock[0].description);

      expect(description).toBeInTheDocument();
    });
  });
});
