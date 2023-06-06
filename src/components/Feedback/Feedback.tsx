import { useAppDispatch, useAppSelector } from "../../store";
import { hideFeedbackActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import FeedbackStyled from "./FeedbackStyled";

const Feedback = (): React.ReactElement => {
  const { message, isError } = useAppSelector((state) => state.uiStore);
  const dispatch = useAppDispatch();

  const handleOnClose = () => {
    dispatch(hideFeedbackActionCreator());
  };

  return (
    <FeedbackStyled
      className="feedback"
      onClick={handleOnClose}
      onKeyPress={handleOnClose}
      tabIndex={0}
    >
      <div className={`feedback__message ${isError ? "error__message" : ""}`}>
        <span aria-label="feedback message">{message}</span>
        <Button
          actionOnClick={handleOnClose}
          className={`feedback__button ${isError ? "error__button" : ""}`}
          type="button"
        >
          CLOSE
        </Button>
      </div>
    </FeedbackStyled>
  );
};

export default Feedback;
