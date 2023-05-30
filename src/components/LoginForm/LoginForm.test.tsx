import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  const usernameLabel = "Username";
  const passwordLabel = "Password";
  describe("When rendered", () => {
    test("Then it should show an username and password inputs", () => {
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
  describe("When it is rendered and the user types 'admin' on input username and 'admin' on input password", () => {
    test("Then it should shows inputs with the text typed", async () => {
      const textTypedUsername = "admin";
      const textTypedPassword = "admin";

      renderWithProviders(<LoginForm actionOnSubmit={() => ({})} />);

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);

      await userEvent.type(usernameInput, textTypedUsername);
      await userEvent.type(passwordInput, textTypedPassword);

      expect(passwordInput).toHaveValue(textTypedPassword);
      expect(usernameInput).toHaveValue(textTypedUsername);
    });
  });
});
