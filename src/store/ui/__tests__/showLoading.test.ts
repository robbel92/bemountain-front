import { UiStateStructure } from "../types";
import { showLoadingActionCreator, uiReducer } from "../uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives an current state and a showLoading action", () => {
    test("Then it should return a new state with isLoading set to true", () => {
      const currentUiState: UiStateStructure = { isLoading: false };

      const expectedUiState: UiStateStructure = { isLoading: true };

      const newState = uiReducer(currentUiState, showLoadingActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });
});
