import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

describe("Given a Form component", () => {
  describe("When it is rendered and the user types 'Admin' on name text field", () => {
    test("Then it should show a name text field with 'Admin' value", async () => {
      const labelName = "Name";
      const name = "Admin";

      renderWithProviders(wrapWithRouter(<Form />));

      screen.debug();
      const nameTextField = screen.getByLabelText(labelName);

      await userEvent.type(nameTextField, name);

      screen.debug(nameTextField);
      expect(nameTextField).toBeInTheDocument();
      expect(nameTextField).toHaveValue(name);
    });
  });
});
