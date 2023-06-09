import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import RoutesList from "./RoutesList";
import { PreloadedState } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { currentUserStateMock } from "../../mocks/userMocks/userMocks";

describe("Given a RoutesList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with text 'Routes' ");
    const expectedHeadingText = "Routes";

    renderWithProviders(
      <RoutesList />,
      currentUserStateMock as PreloadedState<RootState>
    );

    const expectedHeading = screen.getByRole("heading", {
      name: expectedHeadingText,
    });

    expect(expectedHeading).toBeInTheDocument();
  });
});
