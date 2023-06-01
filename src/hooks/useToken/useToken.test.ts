import { renderHook } from "@testing-library/react";
import {
  userDataMock,
  userDataTokenMock,
} from "../../mocks/userMocks/userMocks";
import useToken from "./useToken";

describe("Given a getTokenData function", () => {
  describe("When it receives a token", () => {
    test("Then it should return user data from the token received", () => {
      const token = userDataTokenMock.token;

      const {
        result: {
          current: { getTokenData },
        },
      } = renderHook(() => useToken());

      const userLoggedData = getTokenData(token);

      expect(userLoggedData).toStrictEqual(userDataMock);
    });
  });
});
