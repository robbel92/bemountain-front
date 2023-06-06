import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

import { screen } from "@testing-library/react";
import RouteCard from "./RouteCard";
import { routesMock } from "../../mocks/routeMocks/routeMocks";

describe("Given a RouteCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the name of the route", () => {
      const nameRoute = routesMock[0].name;
      renderWithProviders(
        wrapWithRouter(<RouteCard route={routesMock[0]} isLazy="lazy" />)
      );

      const expectedHeading = screen.getByRole("heading", {
        name: nameRoute,
        level: 2,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
