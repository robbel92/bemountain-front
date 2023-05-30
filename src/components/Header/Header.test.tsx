import { renderWithProviders } from "../../utils/testUtils";
import Header from "./Header";
import { screen } from "@testing-library/react";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with bemount logo", () => {
      renderWithProviders(<Header />);

      const imageExpected = screen.getByAltText("logo de la web bemount");

      expect(imageExpected).toBeInTheDocument();
    });
  });
});
