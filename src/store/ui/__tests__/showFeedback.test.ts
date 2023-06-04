import { UiStateStructure } from "../types";
import { showFeedbackActionCreator, uiReducer } from "../uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives an current state and a showFeedback action with a message `Wrong Credentials` and isError 'true'", () => {
    test("Then it should return a new state with message set to 'Wrong credentials'  and isError on true", () => {
      const message = "Wrong Credentials";
      const currentUiState: UiStateStructure = {
        isLoading: false,
        isError: false,
        message: "",
      };

      const expectedUiState: UiStateStructure = {
        isLoading: false,
        isError: true,
        message: message,
      };

      const newState = uiReducer(
        currentUiState,
        showFeedbackActionCreator({ message: message, isError: true })
      );

      expect(newState).toStrictEqual(expectedUiState);
    });
  });
});
