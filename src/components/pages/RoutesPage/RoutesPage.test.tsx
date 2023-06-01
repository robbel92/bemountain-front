import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/testUtils";
import RoutesPage from "./RoutesPage";

describe("Given a RoutesPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading whit text 'World Routes' ", () => {
      const expectedTextHeading = "World Routes";

      renderWithProviders(<RoutesPage />);

      const expectedHeading = screen.getByRole("heading", {
        name: expectedTextHeading,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
