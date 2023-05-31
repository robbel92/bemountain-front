import { renderHook } from "@testing-library/react";

import useUser from "./useUser";
import {
  tokenMock,
  userCredentialsMock,
} from "../../mocks/userMocks/userMocks";

describe("Given a getUserToken function", () => {
  describe("When the function getUserToken is called with a username and a password", () => {
    test("Then it should return a token", async () => {
      const expectedToken = tokenMock;
      const user = userCredentialsMock;
      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const token = await getUserToken(user);

      expect(token).toBe(expectedToken);
    });
  });
});
