import { routesNamesMock } from "../../../mocks/routeMocks/routeMocks";
import { removeRouteActionCreator, routesReducer } from "../routesSlice";
import { RoutesStateStructure } from "../types";

describe("Given a removeRoute reducer", () => {
  describe("When it receives a collection of routes containing one with the name Las xanas, and a remove route action with an ID of the route Las Xanas", () => {
    test("Then it should return a collection of routes without route las xanas", () => {
      const currentRoutesState: RoutesStateStructure = {
        routes: routesNamesMock,
        totalRoutes: routesNamesMock.length,
      };
      routesNamesMock.shift();
      const expectedNewRoutesState = {
        ...currentRoutesState,
        routes: routesNamesMock,
      };

      const newRoutesState = routesReducer(
        currentRoutesState,
        removeRouteActionCreator({ routeId: "idLasXanas" })
      );

      expect(expectedNewRoutesState).toStrictEqual(newRoutesState);
    });
  });
});
