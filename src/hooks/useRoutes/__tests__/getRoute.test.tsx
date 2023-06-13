import { renderHook, screen } from "@testing-library/react";
import { errorHandlers, handlers } from "../../../mocks/handlers";
import { server } from "../../../mocks/server";
import {
  renderWithProviders,
  wrapWithProviders,
} from "../../../utils/testUtils";
import useRoutes from "../useRoutes";
import { RouteObject, RouterProvider, createMemoryRouter } from "react-router";
import Layout from "../../../components/Layout/Layout";

describe("Given a getRoute function", () => {
  const {
    result: {
      current: { getRoute },
    },
  } = renderHook(() => useRoutes(), { wrapper: wrapWithProviders });

  describe("When it is called with an existing route id", () => {
    test("Then it should returns a route'", async () => {
      server.resetHandlers(...handlers);

      const routeId = "6487782f40386e8006e3dad9";

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const response = await getRoute(routeId);

      expect(response).toHaveProperty("id");
    });
  });

  describe("When is is called with an invalid route id", () => {
    test("Then it should appears a feedback component with message 'Sorry, the route could not be modified'", async () => {
      server.resetHandlers(...errorHandlers);

      const invalidRouteId = "6487782f40386e8006e3dad9";

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await getRoute(invalidRouteId);

      const message = await screen.getByLabelText("feedback message");

      expect(message).toHaveTextContent("Could not give the desired route");
    });
  });
});
