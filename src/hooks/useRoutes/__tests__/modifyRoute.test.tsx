import { renderHook, screen } from "@testing-library/react";
import useRoutes from "../useRoutes";
import {
  RouteObject,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import {
  renderWithProviders,
  wrapWithProviders,
} from "../../../utils/testUtils";
import { routeMock } from "../../../mocks/routeMocks/routeMocks";
import { server } from "../../../mocks/server";
import { errorHandlers } from "../../../mocks/handlers";

describe("Given a modifyRoute function", () => {
  describe("When it is called with a valid modified route", () => {
    test("Then it should show a message feedback with text 'The route has been modified succesfully'", async () => {
      const expectedMessage = "The route has been modified succesfully";

      const {
        result: {
          current: { modifyRoute },
        },
      } = renderHook(() => useRoutes(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await modifyRoute(routeMock);

      const message = await screen.getByLabelText("feedback message");

      await expect(message).toHaveTextContent(expectedMessage);
    });
  });
  describe("When it is called with a invalid modified route", () => {
    test("Then it should show a message feedback with text 'Could not modify the desired route'", async () => {
      server.resetHandlers(...errorHandlers);
      const expectedMessage = "Could not modify the desired route";

      const {
        result: {
          current: { modifyRoute },
        },
      } = renderHook(() => useRoutes(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await modifyRoute(routeMock);

      const message = await screen.getByLabelText("feedback message");

      await expect(message).toHaveTextContent(expectedMessage);
    });
  });
});
