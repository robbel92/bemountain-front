import { screen } from "@testing-library/react";
import { routesMock } from "../../mocks/routeMocks/routeMocks";
import { renderWithProviders } from "../../utils/testUtils";
import RoutesList from "./RoutesList";

describe("Given a RoutesList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with text 'Routes' ");
    const expectedHeadingText = "Routes";

    renderWithProviders(<RoutesList routes={routesMock} />);

    const expectedHeading = screen.getByRole("heading", {
      name: expectedHeadingText,
    });

    expect(expectedHeading).toBeInTheDocument();
  });
});
