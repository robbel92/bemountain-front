import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with bemount logo", () => {
      render(<Header></Header>);
      screen.debug();

      const imageExpected = screen.getByAltText("logo de la web bemount");

      expect(imageExpected).toBeInTheDocument();
    });
  });
});
