import { expect } from "vitest";
import { routeMock } from "../../../mocks/routeMocks/routeMocks";
import {
  initialRoutesState,
  loadCurrentRouteActionCreator,
  routesSlice,
} from "../routesSlice";
import { RoutesStateStructure } from "../types";

describe("Given a loadCurrentRoute reducer ", () => {
  describe("When it receives an empty state of currentRoute and a load currentRoute action with a route", () => {
    test("Then it should return the new state with the route in the currentRoute property", () => {
      const currentRoutesState: RoutesStateStructure = initialRoutesState;

      const expectedRoutesState = {
        ...currentRoutesState,
        currentRoute: routeMock,
      };

      const newRoutesState = routesSlice.reducer(
        currentRoutesState,
        loadCurrentRouteActionCreator(routeMock)
      );

      expect(expectedRoutesState).toStrictEqual(newRoutesState);
    });
  });
});
