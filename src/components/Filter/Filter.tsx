import FilterStyled from "./FilterStyled";

interface FilterProps {
  setFilterValue: (filterValue: string) => void;
  setSkip: (skipValue: number) => void;
  setCount: (countValue: number) => void;
}

const Filter = ({
  setFilterValue,
  setCount,
  setSkip,
}: FilterProps): React.ReactElement => {
  const onChangeInputs = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value);
    setCount(0), setSkip(0);
  };

  return (
    <FilterStyled
      name="difficulty"
      id="difficulty"
      onChange={onChangeInputs}
      aria-label="filter"
    >
      <option value="">FILTER BY DIFFICULTY</option>
      <option value="Easy">Easy</option>
      <option value="Moderate">Moderate</option>
      <option value="Hard">Hard</option>
    </FilterStyled>
  );
};
export default Filter;
