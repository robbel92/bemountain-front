import { UiStateStructure } from "../types";
import { hideFeedbackActionCreator, uiReducer } from "../uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives an current state and a showFeedback action", () => {
    test("Then it should return a new state with message set empty and isError on false", () => {
      const message = "Wrong Credentials";
      const currentUiState: UiStateStructure = {
        isLoading: false,
        isError: true,
        message: message,
      };

      const expectedUiState: UiStateStructure = {
        isLoading: false,
        isError: false,
        message: "",
      };

      const newState = uiReducer(currentUiState, hideFeedbackActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });
});
