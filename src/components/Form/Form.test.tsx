import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a name text field", () => {
      const labelName = "Name";

      renderWithProviders(wrapWithRouter(<Form />));

      screen.debug();

      const nameTextField = screen.getByLabelText(labelName);

      expect(nameTextField).toBeInTheDocument();
    });
  });
});
