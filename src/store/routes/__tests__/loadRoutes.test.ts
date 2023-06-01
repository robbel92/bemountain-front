import { routesMock } from "../../../mocks/routeMocks/routeMocks";
import { loadRoutesActionCreator, routesReducer } from "../routesSlice";
import { RouteStructure, RoutesStateStructure } from "../types";

describe("Given a loadRoutes reducer", () => {
  describe("When it receives an empty list of routes and a load routes action with a collection of ten routes", () => {
    test("Then it should return the list with ten routes", () => {
      const currentEmptyRoutes: RouteStructure[] = [];

      const currentEmptyRoutesState: RoutesStateStructure = {
        routes: currentEmptyRoutes,
      };

      const loadRoutesActionResult = loadRoutesActionCreator(routesMock);

      const expectedNewRoutesState: RoutesStateStructure = {
        ...currentEmptyRoutesState,
        routes: routesMock,
      };

      const newRoutesState: RoutesStateStructure = routesReducer(
        currentEmptyRoutesState,
        loadRoutesActionResult
      );

      expect(expectedNewRoutesState).toStrictEqual(newRoutesState);
    });
  });
});
