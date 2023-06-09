import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";
import CreateRoutePage from "../../pages/CreateRoutePage/CreateRoutePage";
import { store } from "../../store";
import { vi } from "vitest";
import Layout from "../Layout/Layout";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { paths } from "../../routers/paths/paths";
import RoutesPage from "../../pages/RoutesPage/RoutesPage";

const spyDispatch = vi.spyOn(store, "dispatch");

describe("Given a Form component", () => {
  describe("When it is rendered and the user types 'Admin' on name text field", () => {
    test("Then it should show a name text field with 'Admin' value", async () => {
      const labelName = "Name";
      const name = "Admin";

      renderWithProviders(wrapWithRouter(<Form actionOnSubmit={() => ({})} />));

      const nameTextField = screen.getByLabelText(labelName);

      await userEvent.type(nameTextField, name);

      expect(nameTextField).toBeInTheDocument();
      expect(nameTextField).toHaveValue(name);
    });
  });
  describe("When it is rendered, the user fills out the form and click ADD ROUTE button", () => {
    test("Then the button should be enabled and on click it should call the actionOnClick function which in turn calls the On function and displays the Feedback modal, then dispatches the addRouteAction creator function to add the route to the store", async () => {
      const labelName = "Name";
      const labelDistance = "Distance";
      const labelDifficulty = "Difficulty";
      const labelElevationGain = "Elevation Gain";
      const labelPhoto = "Photo";
      const labelUbication = "Ubication";
      const labelDescription = "Description";
      const textButton = "ADD ROUTE";

      const routes: RouteObject[] = [
        { path: "/", element: <CreateRoutePage /> },
        { path: paths.routes, element: <RoutesPage /> },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router}></RouterProvider>);

      renderWithProviders(wrapWithRouter(<Layout />));

      const inputName = screen.getByLabelText(labelName);
      const inputDistance = screen.getByLabelText(labelDistance);
      const inputDifficulty = screen.getByLabelText(labelDifficulty);
      const inputElevationGain = screen.getByLabelText(labelElevationGain);
      const inputPhoto = screen.getByLabelText(labelPhoto);
      const inputUbication = screen.getByLabelText(labelUbication);
      const inputdescription = screen.getByLabelText(labelDescription);

      await userEvent.type(inputName, "Name");
      await userEvent.type(inputDistance, "200");
      await userEvent.selectOptions(inputDifficulty, "Moderate");
      await userEvent.type(inputElevationGain, "250");
      await userEvent.type(
        inputPhoto,
        "https://trello.com/b/6VOgfo5a/robert-belenguer-final-project-202304-bcn"
      );
      await userEvent.type(inputUbication, "Valencia");
      await userEvent.type(inputdescription, "La descripcion");

      const submitButton = screen.getByRole("button", { name: textButton });

      expect(submitButton).toBeEnabled();

      await userEvent.click(submitButton);

      const closeButton = await screen.getByRole("button", { name: "CLOSE" });

      await userEvent.click(closeButton);

      await expect(spyDispatch).toHaveBeenCalledTimes(4);
    });
  });
});
