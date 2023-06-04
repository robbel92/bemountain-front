import Button from "../Button/Button";
import FeedbackStyled from "./FeedbackStyled";
interface FeedbackProps {
  text: string;
  isError: boolean;
}

const Feedback = ({ isError, text }: FeedbackProps): React.ReactElement => {
  return (
    <FeedbackStyled className="feedback">
      <div
        className={
          isError ? "feedback__message error__message" : "feedback__message"
        }
      >
        <span aria-label="feedback message">{text}</span>
        <Button
          actionOnClick={() => ({})}
          className={
            isError ? "feedback__button error__button" : "feedback__button"
          }
          type="button"
        >
          CLOSE
        </Button>
      </div>
    </FeedbackStyled>
  );
};

export default Feedback;
