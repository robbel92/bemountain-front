import { routeMock, routesMock } from "../../../mocks/routeMocks/routeMocks";
import { addRouteActionCreator, routesReducer } from "../routesSlice";
import { RoutesStateStructure } from "../types";

describe("Given a addRoute reducer", () => {
  describe("When it receives a collection of routes and an addRoute action with a new route on payload", () => {
    test("Then it should return a list of routes with the new route", () => {
      const newRoute = routeMock;

      const currentRoutesState: RoutesStateStructure = {
        routes: routesMock,
        totalRoutes: routesMock.length,
      };

      const newRoutesState = routesReducer(
        currentRoutesState,
        addRouteActionCreator(newRoute)
      );

      expect(newRoutesState.routes.length).toBe(
        currentRoutesState.routes.length + 1
      );
    });
  });
});
