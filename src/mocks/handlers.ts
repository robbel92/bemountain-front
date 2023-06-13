import { rest } from "msw";
import { tokenMock } from "./userMocks/userMocks";
import { apiUrl } from "../hooks/useUser/useUser";
import { paths } from "../routers/paths/paths";
import {
  routeMock,
  routesDifficultyMock,
  routesMock,
  routesMockSkipZero,
  routesNamesMock,
} from "./routeMocks/routeMocks";

export const handlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}${paths.routes}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        routes: routesMock,
        totalRoutes: routesMock.length,
      })
    );
  }),

  rest.delete(`${apiUrl}${paths.routes}/:routeId`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: "The route has been successfully deleted" })
    );
  }),

  rest.get(`${apiUrl}${paths.routes}/:routeId`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ route: routesNamesMock[0] }));
  }),

  rest.post(`${apiUrl}${paths.routes}/addRoute`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(routeMock));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${apiUrl}${paths.routes}`, (_req, res, ctx) => {
    const invalidAuthorization = "Bearer tokentoken";

    ctx.set(`Authorization`, invalidAuthorization);
    return res(ctx.status(401));
  }),
  rest.get(`${apiUrl}${paths.routes}/:routeId`, (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({ message: "Sorry, the route could not be modified" })
    );
  }),

  rest.post(`${apiUrl}${paths.routes}/addRoute`, (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({ message: "Could not add the desired route" })
    );
  }),
];

export const variantsHandlers = [
  rest.get(`${apiUrl}${paths.routes}`, (req, res, ctx) => {
    const searchParams = req.url.searchParams;
    searchParams.set("skip", "0");
    searchParams.set("limit", "5");

    return res(
      ctx.status(200),
      ctx.json({
        routes: routesMockSkipZero,
        totalRoutes: routesMockSkipZero.length,
      })
    );
  }),
  rest.get(`${apiUrl}/routes/${routesNamesMock[0].id}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ route: routesNamesMock[0] }));
  }),
];

export const filterHandlers = [
  rest.get(`${apiUrl}${paths.routes}`, (req, res, ctx) => {
    const searchParams = req.url.searchParams;
    searchParams.set("skip", "0");
    searchParams.set("limit", "5");
    searchParams.set("filter", "difficulty");
    searchParams.set("filterValue", "Easy");

    return res(
      ctx.status(200),
      ctx.json({
        routes: routesDifficultyMock,
        totalRoutes: routesDifficultyMock.length,
      })
    );
  }),
];
