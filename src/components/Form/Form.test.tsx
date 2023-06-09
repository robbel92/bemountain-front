import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("Given a Form component", () => {
  describe("When it is rendered and the user types 'Admin' on name text field", () => {
    test("Then it should show a name text field with 'Admin' value", async () => {
      const labelName = "Name";
      const name = "Admin";

      renderWithProviders(wrapWithRouter(<Form actionOnSubmit={() => ({})} />));

      screen.debug();
      const nameTextField = screen.getByLabelText(labelName);

      await userEvent.type(nameTextField, name);

      screen.debug(nameTextField);
      expect(nameTextField).toBeInTheDocument();
      expect(nameTextField).toHaveValue(name);
    });
  });
  describe("When it is rendered, the user fills out the form and click ADD ROUTE button", () => {
    test.only("Then the button must be enabled and when clicked it must call the actionOnClick function", async () => {
      const labelName = "Name";
      const labelDistance = "Distance";
      const labelDifficulty = "Difficulty";
      const labelElevationGain = "Elevation Gain";
      const labelPhoto = "Photo";
      const labelUbication = "Ubication";
      const labelDescription = "Description";
      const textButton = "ADD ROUTE";

      const valueNumber = "200";

      const actionOnclick = vi.fn();

      renderWithProviders(
        wrapWithRouter(<Form actionOnSubmit={actionOnclick} />)
      );

      const inputName = screen.getByLabelText(labelName);
      const inputDistance = screen.getByLabelText(labelDistance);
      const inputDifficulty = screen.getByLabelText(labelDifficulty);
      const inputElevationGain = screen.getByLabelText(labelElevationGain);
      const inputPhoto = screen.getByLabelText(labelPhoto);
      const inputUbication = screen.getByLabelText(labelUbication);
      const inputdescription = screen.getByLabelText(labelDescription);

      await userEvent.type(inputName, "Name");
      await userEvent.type(inputDistance, "200");
      await userEvent.selectOptions(inputDifficulty, "Moderate");
      await userEvent.type(inputElevationGain, "250");
      await userEvent.type(
        inputPhoto,
        "https://trello.com/b/6VOgfo5a/robert-belenguer-final-project-202304-bcn"
      );
      await userEvent.type(inputUbication, "Valencia");
      await userEvent.type(inputdescription, "La descripcion");

      const submitButton = screen.getByRole("button", { name: textButton });

      expect(submitButton).toBeEnabled();

      await userEvent.click(submitButton);

      expect(actionOnclick).toHaveBeenCalled();
    });
  });
});
