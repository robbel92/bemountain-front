import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";
import Navigation from "./Navigation";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";

describe("Given a Navigation component", () => {
  describe("When its rendered", () => {
    test("Then it should show 2 links with their create and home icons and a button with the log out icon", () => {
      renderWithProviders(wrapWithRouter(<Navigation />));

      const linkCreate = screen.getByLabelText("to create page");
      const linkHome = screen.getByLabelText("to home page");
      const buttonLogout = screen.getByLabelText("to logout");

      expect(linkCreate).toBeInTheDocument();
      expect(linkHome).toBeInTheDocument();
      expect(buttonLogout).toBeInTheDocument();
    });
  });
});
describe("Given a logoutOnClick function", () => {
  describe("When it is called", () => {
    test("Then it should navigate to LoginPage", async () => {
      const routes = [
        {
          path: "/",
          element: <Navigation />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ];

      const navigationRouter = createMemoryRouter(routes);
      const expectedHeadingFormText = "Log in to enjoy the mountains";

      renderWithProviders(<RouterProvider router={navigationRouter} />);

      const logOutButton = screen.getByLabelText("to logout");

      await userEvent.click(logOutButton);

      const expectedFormHeading = screen.getByRole("heading", {
        name: expectedHeadingFormText,
      });

      expect(expectedFormHeading).toBeInTheDocument();
    });
  });
});
