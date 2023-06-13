import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import ModifyRoutePage from "./ModifyRoutePage";
import { test } from "vitest";
import userEvent from "@testing-library/user-event";
import { routesNamesMock } from "../../mocks/routeMocks/routeMocks";
import RoutesPage from "../RoutesPage/RoutesPage";

describe("Given a CreateRoutePage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with text 'create your route'", () => {
      const expectedTextHeading = "Modify your route";

      renderWithProviders(wrapWithRouter(<ModifyRoutePage />));

      const heading = screen.getByRole("heading", {
        name: expectedTextHeading,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });
  });
  describe("When it is rendered", () => {
    test("Then it should show a heading with text 'create your route'", async () => {
      const textButton = "MODIFY ROUTE";
      const labelName = "Name";

      renderWithProviders(
        wrapWithRouter(<ModifyRoutePage />, <RoutesPage />, "/routes"),
        {
          routesStore: {
            currentRoute: routesNamesMock[0],
            routes: routesNamesMock,
            totalRoutes: routesNamesMock.length,
          },
        }
      );

      const inputName = screen.getByLabelText(labelName);

      await userEvent.type(inputName, "Las xanas nuevo");

      const buttonModify = screen.getByRole("button", { name: textButton });

      await userEvent.click(buttonModify);

      const filterHomePage = screen.getByLabelText("filter");

      expect(filterHomePage).toBeInTheDocument();
    });
  });
});
