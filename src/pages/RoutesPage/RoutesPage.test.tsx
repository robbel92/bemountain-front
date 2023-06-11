import { screen, waitFor } from "@testing-library/react";
import RoutesPage from "./RoutesPage";
import { LazyRoutesPage } from "../../routers/LazyPages";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { routesMock, routesNamesMock } from "../../mocks/routeMocks/routeMocks";
import { tokenMock } from "../../mocks/userMocks/userMocks";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { server } from "../../mocks/server";
import { variantsHandlers } from "../../mocks/handlers";

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
        routesStore: {
          routes: routesNamesMock,
          totalRoutes: routesNamesMock.length,
        },
        userStore: {
          id: routesNamesMock[0].author.toString(),
          image: "",
          name: "",
          token: tokenMock,
          isLogged: true,
        },
      });

      const deleteButton = screen.getAllByLabelText(ariaLabelDeleteButton);

      const headingCard = screen.getByRole("heading", {
        name: routesNamesMock[0].name,
      });

      await userEvent.click(deleteButton[0]);

      expect(headingCard).not.toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks the button next", () => {
    test("Then the seen cards must disappear and the next 5 appear", async () => {
      server.resetHandlers(...variantsHandlers);
      const textNextButton = "Next";
      const textPreviousButton = "Previous";
      window.scrollTo = vi.fn().mockImplementation(() => ({}));

      renderWithProviders(wrapWithRouter(<RoutesPage />), {
        routesStore: {
          routes: routesMock,
          totalRoutes: routesMock.length,
        },
      });

      const nextButton = screen.getByRole("button", { name: textNextButton });

      const expectedHeading = await screen.getByRole("heading", {
        name: routesMock[0].name,
      });

      expect(expectedHeading).toBeInTheDocument();

      await userEvent.click(nextButton);
      expect(expectedHeading).not.toBeInTheDocument();

      const previousButton = await screen.getByRole("button", {
        name: textPreviousButton,
      });
      expect(previousButton).toBeEnabled();
      await userEvent.click(previousButton);
    });
  });
});
