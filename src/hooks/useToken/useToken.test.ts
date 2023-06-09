import { renderHook } from "@testing-library/react";
import { userDataMock } from "../../mocks/userMocks/userMocks";
import useToken from "./useToken";

describe("Given a getTokenData function", () => {
  describe("When it receives a token", () => {
    test("Then it should return user data from the token received", () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmY3YmFmOWExOTg4MjBjYWY5OGEiLCJuYW1lIjoiQWRtaW5pc3RyYWRvciIsImltYWdlIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGJwZHl0aWoyL2ltYWdlL3VwbG9hZC92MTY4NjMzMjAwNy9hdmF0YXJfYXU5aGphLnBuZyIsImlhdCI6MTY4NjM0Nzg3MCwiZXhwIjoxNjg4OTM5ODcwfQ.mEEqAWHX35FwdcQ64WDKsJjz-eK7CFyuxS9y6OYViUA";

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
