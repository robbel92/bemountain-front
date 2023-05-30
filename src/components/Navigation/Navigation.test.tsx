import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Navigation from "./Navigation";

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
