import { rest } from "msw";
import { tokenMock } from "./userMocks/userMocks";
import { apiUrl } from "../hooks/useUser/useUser";

export const handlers = [
  rest.post(`${apiUrl}user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),
];
