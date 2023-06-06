import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../../utils/testUtils";
import { LazyRoutesPage } from "../../../routers/LazyPages";
import { routesNamesMock } from "../../../mocks/routeMocks/routeMocks";
import RoutesPage from "./RoutesPage";
import userEvent from "@testing-library/user-event";

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
  describe("When it is rendered and the user click the delete button", () => {
    test("Then this card should disappear to the document", async () => {
      const ariaLabelDeleteButton = "delete";

      renderWithProviders(wrapWithRouter(<RoutesPage />), {
        routesStore: { routes: routesNamesMock },
      });

      const deleteButton = screen.getAllByLabelText(ariaLabelDeleteButton);

      const headingCard = screen.getByRole("heading", {
        name: routesNamesMock[0].name,
      });

      await userEvent.click(deleteButton[0]);

      expect(headingCard).not.toBeInTheDocument();
    });
  });
});
