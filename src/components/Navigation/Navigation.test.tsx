import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When its rendered", () => {
    test("Then it should show 3 navigation links with your image, 'CREATE', 'HOME', 'LOGOUT'", () => {
      renderWithProviders(wrapWithRouter(<Navigation />));

      const imageLinkCreate = screen.getByAltText(
        "icono de un signo de suma que indica crear o añadir"
      );
      const imageLinkHome = screen.getByAltText("imagen de un logo home");
      const imageLinkLogout = screen.getByAltText(
        "icono de una puerta que indica log out"
      );

      expect(imageLinkCreate).toBeInTheDocument();
      expect(imageLinkHome).toBeInTheDocument();
      expect(imageLinkLogout).toBeInTheDocument();
    });
  });
});
