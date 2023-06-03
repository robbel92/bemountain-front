import { renderHook } from "@testing-library/react";
import useRoutes from "./useRoutes";
import { wrapWithProviders } from "../../utils/testUtils";
import { routesMock } from "../../mocks/routeMocks/routeMocks";

describe("Given a getRoutes fucntion", () => {
  describe("When it is called", () => {
    test("Then it should return a list with 4 routes", async () => {
      const expectedResponse = routesMock;

      const {
        result: {
          current: { getRoutes },
        },
      } = renderHook(() => useRoutes(), { wrapper: wrapWithProviders });

      const response = await getRoutes();

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
