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

routesNamesMock.push(
  getRouteDataMock({ name: "Las Xanas", id: "6487782f40386e8006e3dad6" })
);
routesNamesMock.push(
  getRouteDataMock({ name: "Monduber", id: "6487782f40386e8008e3dad6" })
);

export const routesMockSkipZero = getRoutesDataMock(35);
