import { screen, waitFor } from "@testing-library/react";
import { routesNamesMock } from "../../mocks/routeMocks/routeMocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import RouteDetailsPage from "./RouteDetailsPage";
import { server } from "../../mocks/server";
import { handlers, variantsHandlers } from "../../mocks/handlers";
import Layout from "../../components/Layout/Layout";
import { Navigate, RouterProvider, createMemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import RoutesPage from "../RoutesPage/RoutesPage";

describe("Given a RoutesDetailsPage", () => {
  describe("When it is rendered", () => {
    test("The it should show a heading with name of route", async () => {
      server.resetHandlers(...handlers);
      const expectedNameRoute = routesNamesMock[0].name;

      renderWithProviders(wrapWithRouter(<RouteDetailsPage />), {
        routesStore: {
          routes: routesNamesMock,
          totalRoutes: routesNamesMock.length,
          currentRoute: routesNamesMock[0],
        },
        userStore: {
          id: routesNamesMock[0].author,
          image: "",
          name: "Administrator",
          token: "asdf",
          isLogged: true,
        },
      });
      const deleteButton = screen.getByRole("button", {
        name: "delete",
      });

      const heading = screen.getByRole("heading", {
        name: expectedNameRoute,
      });

      expect(heading).toBeInTheDocument();
      await userEvent.click(deleteButton);
    });
  });

  describe("When it is rendered and the user clicks the delete button", () => {
    test("Then it should show a feedback", async () => {
      server.resetHandlers(...variantsHandlers);
      const textDeleteButton = "delete";

      const routes = [
        {
          path: "/",
          element: <Layout />,

          children: [
            {
              index: true,
              element: (
                <Navigate to={`/routes/${routesNamesMock[0].id}`} replace />
              ),
            },
            {
              path: `/routes/${routesNamesMock[0].id}`,
              element: <RouteDetailsPage />,
            },
          ],
        },
        {
          path: `/routes`,
          element: <RoutesPage />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router}></RouterProvider>);

      const deleteButton = await waitFor(
        async () =>
          await screen.getByRole("button", {
            name: textDeleteButton,
          })
      );
      waitFor(async () => await userEvent.click(deleteButton));

      const messageFeedback = waitFor(
        async () => await screen.getByLabelText("feedback message")
      );

      waitFor(
        async () =>
          await expect(messageFeedback).toHaveTextContent(
            "The selected route has been deleted succesfully"
          )
      );
      await userEvent.click(deleteButton);
    });
  });
});
