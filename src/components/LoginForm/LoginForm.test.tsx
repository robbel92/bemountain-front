import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When rendered", () => {
    test("Then it should show an username and password inputs", () => {
      const usernameLabel = "Username";
      const passwordLabel = "Password";

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
});
