import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Feedback from "./Feedback";

describe("Given a Feedback component", () => {
  describe("When it is rendered and receives a text", () => {
    test("Then it should show a message with this text", () => {
      const text = "Wrong credentials";

      renderWithProviders(<Feedback isError={false} text={text} />);

      const feedbackMessage = screen.getByLabelText("feedback message");

      expect(feedbackMessage).toHaveTextContent(text);
    });
  });
});
