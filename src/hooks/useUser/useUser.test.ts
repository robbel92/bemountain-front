import { renderHook } from "@testing-library/react";

import useUser from "./useUser";
import {
  userCredentialsMock,
  userDataTokenMock,
} from "../../mocks/userMocks/userMocks";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { UserCredentials } from "../../store/user/types";

describe("Given a getUserToken function", () => {
  describe("When the function getUserToken is called with a username and a password", () => {
    test("Then it should return a token", async () => {
      const expectedToken = userDataTokenMock.token;
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
  describe("When it receives invalid user credentials", () => {
    test("Then it should throw a 'Wrong credentials' error", () => {
      server.resetHandlers(...errorHandlers);

      const userCredentialsMock: UserCredentials = {
        username: "user",
        password: "pass",
      };

      const expectedError = "Wrong Credentials";

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const getTokenFunction = getUserToken(userCredentialsMock);

      expect(getTokenFunction).rejects.toThrowError(expectedError);
    });
  });
});
