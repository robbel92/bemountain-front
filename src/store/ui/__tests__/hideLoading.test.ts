import { UiStateStructure } from "../types";
import { hideLoadingActionCreator, uiReducer } from "../uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives an current state and a hideLoading action", () => {
    test("Then it should return a new state with isLoading set to false", () => {
      const currentUiState: UiStateStructure = { isLoading: true };

      const expectedUiState: UiStateStructure = { isLoading: false };

      const newState = uiReducer(currentUiState, hideLoadingActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });
});
