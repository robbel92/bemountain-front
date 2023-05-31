import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";
import { tokenMock } from "../../mocks/userMocks/userMocks";

beforeEach(() => {
  localStorage.clear();
});

const key = "token";
const value = tokenMock;

describe("Given a setLocalStorageKey funcion", () => {
  describe("When it is called with 'el token' and  'tokensito rico'", () => {
    test("Then it should add the key to localStorage", () => {
      const {
        result: {
          current: { setLocalStorageItem },
        },
      } = renderHook(() => useLocalStorage());

      setLocalStorageItem(key, value);

      expect(localStorage).toHaveProperty(key);
      expect(localStorage.getItem(key)).toBe(value);
    });
  });
});
