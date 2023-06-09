import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import CreateRoutePage from "./CreateRoutePage";
import { test } from "vitest";

describe("Given a CreateRoutePage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with text 'create your route'", () => {
      const expectedTextHeading = "Create your route";

      renderWithProviders(wrapWithRouter(<CreateRoutePage />));

      const heading = screen.getByRole("heading", {
        name: expectedTextHeading,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
