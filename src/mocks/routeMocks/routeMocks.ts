import { RouteStructure } from "../../store/routes/types";
import {
  getRouteDataMock,
  getRoutesDataMock,
} from "../factories/routeFactory/routeFactory";

export const routesMock = getRoutesDataMock(10);

export const routeMock = getRouteDataMock();

export const routesNamesMock: RouteStructure[] = [];

routesNamesMock.push(getRouteDataMock({ name: "Las Xanas", id: "idLasXanas" }));
routesNamesMock.push(getRouteDataMock({ name: "Monduber", id: "idMonduber" }));
