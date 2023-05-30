import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with bemount logo", () => {
      const logoExpected = screen.getByAltText("logo de la web bemount");

      renderWithProviders(<LoginPage />);

      expect(logoExpected).toBeInTheDocument();
    });
  });
});
