import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): React.ReactElement => {
  return (
    <FormStyled>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" autoComplete="off" />
      <label htmlFor="distance">Distance</label>
      <input type="number" id="distance" autoComplete="off" />
      <label htmlFor="difficulty">Difficulty</label>
      <select name="difficulty" id="difficulty">
        <option value=""></option>
        <option value="Easy">Easy</option>
        <option value="Moderate">Moderate</option>
        <option value="Hard">Hard</option>
      </select>
      <label htmlFor="elevation-gain">Elevation Gain</label>
      <input type="number" id="elevation-gain" autoComplete="off" />
      <label htmlFor="photo">Photo</label>
      <input type="url" id="photo" autoComplete="off" />
      <label htmlFor="Description">Description</label>
      <textarea name="Description" id="Description" autoComplete="off" />
      <Button className="form-button">ADD ROUTE</Button>
    </FormStyled>
  );
};

export default Form;
