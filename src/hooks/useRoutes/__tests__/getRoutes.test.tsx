import { renderHook } from "@testing-library/react";
import useRoutes from "../useRoutes";
import { wrapWithProviders } from "../../../utils/testUtils";
import { routesMock } from "../../../mocks/routeMocks/routeMocks";
import { errorHandlers, filterHandlers } from "../../../mocks/handlers";
import { server } from "../../../mocks/server";
import {
  paramsMock,
  paramsMockWithFilter,
} from "../../../mocks/utilsMocks/utilsMocks";

describe("Given a getRoutes function", () => {
  describe("When it is called", () => {
    test("Then it should return a list with 4 routes", async () => {
      const expectedResponse = {
        routes: routesMock,
        totalRoutes: routesMock.length,
      };

      const {
        result: {
          current: { getRoutes },
        },
      } = renderHook(() => useRoutes(), { wrapper: wrapWithProviders });

      const response = await getRoutes({ ...paramsMockWithFilter });

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

      const routes = getRoutes({ ...paramsMock });

      expect(routes).rejects.toThrowError(expectedError);
    });
  });

  describe("when receives by querys a filter 'difficulty' and a filterValue 'Easy'.", () => {
    test("Then it should return a collection of routes with the difficulty property and it's value on 'Easy'", async () => {
      server.resetHandlers(...filterHandlers);

      const {
        result: {
          current: { getRoutes },
        },
      } = renderHook(() => useRoutes(), { wrapper: wrapWithProviders });

      const { routes } = await getRoutes({ ...paramsMock });

      routes.forEach((route) => {
        expect(route.difficulty).toBe("Easy");
      });
    });
  });
});
