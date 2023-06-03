import { rest } from "msw";
import { tokenMock } from "./userMocks/userMocks";
import { apiUrl } from "../hooks/useUser/useUser";
import { paths } from "../routers/paths/paths";
import { routesMock } from "./routeMocks/routeMocks";

export const handlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),
  rest.get(`${apiUrl}${paths.routes}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(routesMock));
  }),
];
export const errorHandlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),
];
