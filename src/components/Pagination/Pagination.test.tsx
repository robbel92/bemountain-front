import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Pagination from "./Pagination";
import { routesMock } from "../../mocks/routeMocks/routeMocks";

describe("Given a Pagination component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a next and previous buttons", () => {
      const textNextButton = "Next";
      const textPreviousButton = "Previous";

      renderWithProviders(
        <Pagination
          skip={0}
          count={1}
          onClickNextPage={() => ({})}
          onClickPreviousPage={() => ({})}
        />,
        {
          routesStore: {
            routes: routesMock,
            totalRoutes: routesMock.length,
            currentRoute: routesMock[0],
          },
        }
      );

      const nextButton = screen.getByRole("button", { name: textNextButton });
      const previousButton = screen.getByRole("button", {
        name: textPreviousButton,
      });

      expect(nextButton).toBeInTheDocument();
      expect(previousButton).toBeInTheDocument();
    });
  });
});
