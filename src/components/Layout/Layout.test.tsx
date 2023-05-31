import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "./Layout";
import { vi } from "vitest";

afterEach(() => {
  vi.clearAllMocks();
});

describe("Given a Layout component", () => {
  describe("When it is rendered and path location is different to '/login'", () => {
    test("Then it should show an image with bemount logo", () => {
      const altTextImage = "bemount web logo";

      renderWithProviders(wrapWithRouter(<Layout />));

      const imageExpected = screen.getByAltText(altTextImage);

      expect(imageExpected).toBeInTheDocument();
    });
  });
});
