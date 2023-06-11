import { useAppSelector } from "../../store";
import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  onClickPreviousPage: () => void;
  onClickNextPage: () => void;
  skip: number;
  count: number;
}

const Pagination = ({
  onClickNextPage,
  onClickPreviousPage,

  skip,
  count,
}: PaginationProps): React.ReactElement => {
  const { totalRoutes } = useAppSelector((state) => state.routesStore);
  const result = totalRoutes - skip;
  const nextDisabled = result <= 5;
  return (
    <PaginationStyled>
      <Button actionOnClick={onClickPreviousPage} disabled={count === 0}>
        Previous
      </Button>
      <span className="pagination__count">
        {skip / 5 + 1}/
        {Math.trunc(totalRoutes / 5) + (totalRoutes % 5 === 0 ? 0 : 1)}
      </span>

      <Button actionOnClick={onClickNextPage} disabled={nextDisabled}>
        Next
      </Button>
    </PaginationStyled>
  );
};

export default Pagination;
