import { Factory } from "fishery";

import { RouteStructure } from "../../../store/routes/types";
import { faker } from "@faker-js/faker";

const routeDataFactory = Factory.define<RouteStructure>(() => ({
  id: faker.database.mongodbObjectId().toString(),
  author: faker.database.mongodbObjectId().toString(),
  description: faker.commerce.productDescription(),
  difficulty: faker.helpers.arrayElement(["Fácil", "Moderada", "Difícil"]),
  distance: faker.number.int({ min: 5, max: 200 }),
  elevationGain: faker.number.int({ min: 5, max: 10000 }),
  name: faker.commerce.product(),
  photo: faker.image.url(),
  ubication: faker.location.city(),
}));

export const getRouteDataMock = (data?: RouteStructure) => {
  return routeDataFactory.build(data);
};

export const getRoutesDataMock = (howMany: number, data?: RouteStructure) => {
  return routeDataFactory.buildList(howMany, data);
};
