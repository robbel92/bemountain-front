import { useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";
import { RouteStructure } from "../../store/routes/types";

const Form = (): React.ReactElement => {
  const [routeData, setRouteData] = useState<Partial<RouteStructure>>({
    name: "",
    difficulty: "",
    photo: "",
    ubication: "",
    distance: 0,
    elevationGain: 0,
    description: "",
  });

  const onChangeInputs = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setRouteData({
      ...routeData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <FormStyled>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        autoComplete="off"
        onChange={onChangeInputs}
      />
      <label htmlFor="distance">Distance</label>
      <input
        type="number"
        id="distance"
        autoComplete="off"
        onChange={onChangeInputs}
      />
      <label htmlFor="difficulty">Difficulty</label>
      <select name="difficulty" id="difficulty" onChange={onChangeInputs}>
        <option value=""></option>
        <option value="Easy">Easy</option>
        <option value="Moderate">Moderate</option>
        <option value="Hard">Hard</option>
      </select>
      <label htmlFor="elevation-gain">Elevation Gain</label>
      <input
        type="number"
        id="elevation-gain"
        autoComplete="off"
        onChange={onChangeInputs}
      />
      <label htmlFor="photo">Photo</label>
      <input
        type="url"
        id="photo"
        autoComplete="off"
        onChange={onChangeInputs}
      />
      <label htmlFor="ubication">Ubication</label>
      <input
        type="url"
        id="ubication"
        autoComplete="off"
        onChange={onChangeInputs}
      />
      <label htmlFor="Description">Description</label>
      <textarea
        name="Description"
        id="Description"
        autoComplete="off"
        onChange={onChangeInputs}
      />
      <Button className="form-button">ADD ROUTE</Button>
    </FormStyled>
  );
};

export default Form;
