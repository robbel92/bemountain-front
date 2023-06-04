import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Feedback from "./Feedback";
import { store } from "../../store";
import userEvent from "@testing-library/user-event";

describe("Given a Feedback component", () => {
  describe("When it is rendered ", () => {
    test("Then it should show a button with the text 'CLOSE' which when clicked should set the ui store message to empty", async () => {
      const buttonText = "CLOSE";

      renderWithProviders(<Feedback />, {
        uiStore: { isError: true, isLoading: false, message: "hola" },
      });

      const button = screen.getByRole("button", {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();

      await userEvent.click(button);

      const testStore = store.getState();

      expect(testStore.uiStore.message).toBeFalsy();
    });
  });
});
