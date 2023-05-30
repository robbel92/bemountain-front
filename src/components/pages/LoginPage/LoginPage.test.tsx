import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../../utils/testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with bemount logo", () => {
      const altTextLogo = "bemount web logo";

      renderWithProviders(wrapWithRouter(<LoginPage />));
      const logoExpected = screen.getByAltText(altTextLogo);

      expect(logoExpected).toBeInTheDocument();
    });
  });
});
