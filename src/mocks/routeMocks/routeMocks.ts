import { RouteStructure } from "../../store/routes/types";
import {
  getRouteDataMock,
  getRoutesDataMock,
} from "../factories/routeFactory/routeFactory";

export const routesMock = getRoutesDataMock(49);

export const routesDifficultyMock = getRoutesDataMock(10, {
  difficulty: "Easy",
});

export const routeMock = getRouteDataMock();

export const routesNamesMock: RouteStructure[] = [];

routesNamesMock.push(getRouteDataMock({ name: "Las Xanas", id: "idLasXanas" }));
routesNamesMock.push(getRouteDataMock({ name: "Monduber", id: "idMonduber" }));

export const routesMockSkipZero = getRoutesDataMock(35);
