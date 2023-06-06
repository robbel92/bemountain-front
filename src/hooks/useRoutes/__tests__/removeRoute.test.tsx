import { renderHook, screen } from "@testing-library/react";
import useRoutes from "../useRoutes";
import {
  renderWithProviders,
  wrapWithProviders,
} from "../../../utils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { server } from "../../../mocks/server";
import { errorHandlers, handlers } from "../../../mocks/handlers";
import Layout from "../../../components/Layout/Layout";

describe("Given a removeRoute function", () => {
  describe("When it is called with an existing routeId", () => {
    test("Then should appears a feedback component with message 'The route has been successfully deleted'", async () => {
      server.resetHandlers(...handlers);

      const routeId = "647f17dfbd1592493e0639e5";

      const {
        result: {
          current: { removeRoute },
        },
      } = renderHook(() => useRoutes(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await removeRoute(routeId);

      const message = await screen.getByLabelText("feedback message");

      expect(message).toBeInTheDocument();
    });
  });
  describe("When it is called with an invalid routeId", () => {
    test("Then should appears a feedback component with message 'Sorry, the selected route could not be deleted'", async () => {
      server.resetHandlers(...errorHandlers);

      const routeId = "647f15";

      const {
        result: {
          current: { removeRoute },
        },
      } = renderHook(() => useRoutes(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await removeRoute(routeId);

      const message = await screen.getByLabelText("feedback message");

      expect(message).toBeInTheDocument();
    });
  });
});
