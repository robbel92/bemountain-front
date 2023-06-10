import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  onClickPreviousPage: () => void;
  onClickNextPage: () => void;
}

const Pagination = ({
  onClickNextPage,
  onClickPreviousPage,
}: PaginationProps): React.ReactElement => {
  return (
    <PaginationStyled>
      <Button actionOnClick={onClickPreviousPage}>Previous</Button>
      <Button actionOnClick={onClickNextPage}>Next</Button>
    </PaginationStyled>
  );
};

export default Pagination;
