import { rest } from "msw";
import { tokenMock } from "./userMocks/userMocks";
import { apiUrl } from "../hooks/useUser/useUser";
import { paths } from "../routers/paths/paths";

export const handlers = [
  rest.post(`${apiUrl}user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),
];
export const errorHandlers = [
  rest.post(`${apiUrl}user/${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),
];
