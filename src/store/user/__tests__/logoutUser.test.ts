import {
  currentUserStateMock,
  initialUserStateMock,
} from "../../../mocks/userMocks/userMocks";
import { logoutUserActionCreator, userReducer } from "../userSlice";

describe("Given a logoutUser mini reducer", () => {
  describe("When it is called", () => {
    test("Then it should change current state to initialUserState", () => {
      const currentState = currentUserStateMock;

      const newUserState = userReducer(currentState, logoutUserActionCreator());

      expect(newUserState).toStrictEqual(initialUserStateMock);
    });
  });
});
