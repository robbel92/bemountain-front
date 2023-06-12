import FilterStyled from "./FilterStyled";

interface FilterProps {
  setFilterValue: (filterValue: string) => void;
}

const Filter = ({ setFilterValue }: FilterProps): React.ReactElement => {
  const onChangeInputs = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value);
  };

  return (
    <FilterStyled name="difficulty" id="difficulty" onChange={onChangeInputs}>
      <option value="">DIFFICULTY</option>
      <option value="Easy">Easy</option>
      <option value="Moderate">Moderate</option>
      <option value="Hard">Hard</option>
    </FilterStyled>
  );
};
export default Filter;
