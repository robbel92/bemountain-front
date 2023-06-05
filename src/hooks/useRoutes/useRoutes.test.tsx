import { renderHook } from "@testing-library/react";
import useRoutes from "./useRoutes";
import { wrapWithProviders } from "../../utils/testUtils";
import { routesMock } from "../../mocks/routeMocks/routeMocks";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";

describe("Given a getRoutes function", () => {
  describe("When it is called", () => {
    test("Then it should return a list with 4 routes", async () => {
      const expectedResponse = routesMock;

      const {
        result: {
          current: { getRoutes },
        },
      } = renderHook(() => useRoutes(), { wrapper: wrapWithProviders });

      const response = await getRoutes();

      expect(response).toStrictEqual(expectedResponse);
    });
  });
  describe("When it receives an invalid token", () => {
    test("Then it should throw a 'Sorry, Routes could not be loaded' error", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("Sorry, Routes could not be loaded");

      const {
        result: {
          current: { getRoutes },
        },
      } = renderHook(() => useRoutes(), { wrapper: wrapWithProviders });

      const routes = getRoutes();

      expect(routes).rejects.toThrowError(expectedError);
    });
  });
});
