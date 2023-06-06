import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import RouteCard from "./RouteCard";
import { routesMock } from "../../mocks/routeMocks/routeMocks";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

beforeAll(() => {
  vi.clearAllMocks();
});

describe("Given a RouteCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the name of the route", async () => {
      const nameRoute = routesMock[0].name;
      renderWithProviders(
        wrapWithRouter(<RouteCard route={routesMock[0]} isLazy="lazy" />)
      );

      const expectedHeading = screen.getByRole("heading", {
        name: nameRoute,
        level: 2,
      });
      const deleteButton = screen.getByRole("button", {
        name: "delete",
      });

      await userEvent.click(deleteButton);

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
