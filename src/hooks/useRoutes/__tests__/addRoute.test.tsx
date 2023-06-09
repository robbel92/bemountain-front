import { renderHook, screen } from "@testing-library/react";
import useRoutes from "../useRoutes";
import { routeMock } from "../../../mocks/routeMocks/routeMocks";
import {
  renderWithProviders,
  wrapWithProviders,
} from "../../../utils/testUtils";
import {
  RouteObject,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import { server } from "../../../mocks/server";
import { errorHandlers } from "../../../mocks/handlers";

describe("Given a addRoutes fucntion", () => {
  describe("When it is called with a valid new route", () => {
    test("Then it should show a message feedback with text 'The route has been added succesfully'", async () => {
      const expectedMessageFeedback = "The route has been added succesfully";
      const {
        result: {
          current: { addRoute },
        },
      } = renderHook(() => useRoutes(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await addRoute(routeMock);

      const message = await screen.getByLabelText("feedback message");

      await expect(message).toHaveTextContent(expectedMessageFeedback);
    });
  });
  describe("When it is called with an invalid new route", () => {
    test("Then it should show a message feedback with text 'The route has been added succesfully'", async () => {
      server.resetHandlers(...errorHandlers);
      const invalidRouteData = {
        name: "las xanas",
      };
      const expectedMessageFeedback = "Could not add the desired route";
      const {
        result: {
          current: { addRoute },
        },
      } = renderHook(() => useRoutes(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await addRoute(invalidRouteData);

      const message = await screen.getByLabelText("feedback message");

      await expect(message).toHaveTextContent(expectedMessageFeedback);
    });
  });
});
