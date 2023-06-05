import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../../utils/testUtils";
import PageNotFound from "./PageNotFound";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { paths } from "../../../routers/paths/paths";
import userEvent from "@testing-library/user-event";

describe("Given a PageNotFound page ", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with text 'BACK HOME' ", () => {
      const text = "BACK HOME";

      renderWithProviders(wrapWithRouter(<PageNotFound />));

      const button = screen.getByRole("button", {
        name: text,
      });

      expect(button).toBeInTheDocument();
    });
  });
  describe("When it is rendered and user clicks the button BACK HOME", () => {
    test("Then the button 'BACK HOME' should disappear ", async () => {
      const text = "BACK HOME";
      const routes: RouteObject[] = [
        { path: "/", element: <PageNotFound /> },
        { path: paths.home },
      ];

      const routerPageNotFound = createMemoryRouter(routes);

      renderWithProviders(
        <RouterProvider router={routerPageNotFound}></RouterProvider>
      );

      const button = screen.getByRole("button", {
        name: text,
      });

      await userEvent.click(button);

      expect(button).not.toBeInTheDocument();
    });
  });
});
