import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "./LoginPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { LazyLoginPage } from "../../routers/LazyPages";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { paths } from "../../routers/paths/paths";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with bemount logo", async () => {
      const altTextLogo = "bemount web logo";

      renderWithProviders(wrapWithRouter(<LazyLoginPage />));
      const logoExpected = await waitFor(() =>
        screen.getByAltText(altTextLogo)
      );

      expect(logoExpected).toBeInTheDocument();
    });
  });
  describe("When it is rendered and receives a valid user credentials", () => {
    test("Then it should redirect to home page", async () => {
      const usernameLabel = "Username";
      const passwordLabel = "Password";
      const textExpectedButton = "LOG IN";

      const routes: RouteObject[] = [
        { path: "/", element: <LoginPage /> },
        { path: paths.routes },
      ];

      const routerLogin = createMemoryRouter(routes);

      renderWithProviders(
        <RouterProvider router={routerLogin}></RouterProvider>
      );

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);
      const buttonLogIn = screen.getByRole("button", {
        name: textExpectedButton,
      });

      const username = "admin";
      const password = "admin";

      await userEvent.type(usernameInput, username);
      await userEvent.type(passwordInput, password);
      await userEvent.click(buttonLogIn);

      expect(routerLogin.state.location.pathname).toBe(paths.routes);
    });
  });
});
