import { screen } from "@testing-library/react";
import { vi } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  const usernameLabel = "Username";
  const passwordLabel = "Password";
  const textExpectedButton = "LOG IN";

  const actionOnSubmit = vi.fn();

  describe("When rendered", () => {
    test("Then it should show an username and password text fields", () => {
      renderWithProviders(<LoginForm actionOnSubmit={() => ({})} />);

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a heading with test 'Log in to enjoy the mountains'", () => {
      const headingText = "Log in to enjoy the mountains";

      renderWithProviders(<LoginForm actionOnSubmit={() => ({})} />);

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
        level: 1,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user types 'admin' on text field username and 'admin' on text field password", () => {
    test("Then it should shows inputs with the text typed", async () => {
      const textTypedUsername = "admin";
      const textTypedPassword = "admin";

      renderWithProviders(<LoginForm actionOnSubmit={actionOnSubmit} />);

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);

      await userEvent.type(usernameInput, textTypedUsername);
      await userEvent.type(passwordInput, textTypedPassword);

      expect(passwordInput).toHaveValue(textTypedPassword);
      expect(usernameInput).toHaveValue(textTypedUsername);
    });
  });

  describe("When it is rendered and the text fields are empty", () => {
    test("Then the button LOG IN is disabled", () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm actionOnSubmit={actionOnSubmit} />)
      );

      const buttonLogIn = screen.getByRole("button", {
        name: textExpectedButton,
      });

      expect(buttonLogIn).toBeDisabled();
    });
  });
  describe("When it is rendered and the user types a valid credentials and submit", () => {
    test("Then it should call the actionOnSubmit function received with de user credentials", async () => {
      const textTypedUsername = "admin";
      const textTypedPassword = "admin";

      renderWithProviders(<LoginForm actionOnSubmit={actionOnSubmit} />);

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);

      await userEvent.type(usernameInput, textTypedUsername);
      await userEvent.type(passwordInput, textTypedPassword);

      const buttonLogIn = screen.getByRole("button", {
        name: textExpectedButton,
      });

      await userEvent.click(buttonLogIn);

      expect(actionOnSubmit).toHaveBeenCalled();
    });
  });
});
