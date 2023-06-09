import { rest } from "msw";
import { tokenMock } from "./userMocks/userMocks";
import { apiUrl } from "../hooks/useUser/useUser";
import { paths } from "../routers/paths/paths";
import { routeMock, routesMock } from "./routeMocks/routeMocks";

export const handlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}${paths.routes}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(routesMock));
  }),

  rest.delete(`${apiUrl}${paths.routes}/:routeId`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: "The route has been successfully deleted" })
    );
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

  rest.post(`${apiUrl}${paths.routes}/addRoute`, (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({ message: "Could not add the desired route" })
    );
  }),
];
