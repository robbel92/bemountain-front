import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../../utils/testUtils";
import { LazyRoutesPage } from "../../../routers/LazyPages";

describe("Given a RoutesPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading whit text 'World Routes' ", async () => {
      const expectedTextHeading = "World Routes";

      renderWithProviders(wrapWithRouter(<LazyRoutesPage />));

      const expectedHeading = await waitFor(() =>
        screen.getByRole("heading", {
          name: expectedTextHeading,
        })
      );
      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
