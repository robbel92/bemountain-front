import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { vi } from "vitest";

describe("Given a Button component", () => {
  describe("When it is rendered and renders a text 'Holacocacola' on children", () => {
    test("Then it should show a button with text 'Holacocacola'", () => {
      const text = "Holacocacola";

      const action = vi.fn;

      render(
        <Button type="button" className="" actionOnClick={action}>
          {text}
        </Button>
      );

      const textButton = screen.getByRole("button", {
        name: text,
      });

      expect(textButton.textContent).toStrictEqual(text);
    });
  });
});
