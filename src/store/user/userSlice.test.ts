import {
  initialUserStateMock,
  userDataTokenMock,
} from "../../mocks/userMocks/userMocks";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a loginUser mini reducer", () => {
  describe("When it is called with a currentUserState and action with user on payload", () => {
    test("Then it should return the new state with isLogged propierty on true", () => {
      const currentUserState = initialUserStateMock;

      const expectedValueIsLogged = true;

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(userDataTokenMock)
      );

      expect(newUserState.isLogged).toBe(expectedValueIsLogged);
    });
  });
});
