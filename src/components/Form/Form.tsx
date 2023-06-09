import { useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";
import { RouteStructure } from "../../store/routes/types";

interface FormProps {
  actionOnSubmit: (newRoute: Partial<RouteStructure>) => void;
}

const Form = ({ actionOnSubmit }: FormProps): React.ReactElement => {
  const initialRouteData = {
    name: "",
    difficulty: "",
    photo: "",
    ubication: "",
    distance: 0,
    elevationGain: 0,
    description: "",
  };
  const [routeData, setRouteData] =
    useState<Partial<RouteStructure>>(initialRouteData);
  const isComplete = Object.values(routeData).every((value) => {
    return value.toString().length > 0 && value.toString() !== "0";
  });

  const handleOnSubmit = () => {
    event?.preventDefault();
    actionOnSubmit(routeData);
    setRouteData(initialRouteData);
  };

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
    <FormStyled onSubmit={handleOnSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        autoComplete="off"
        onChange={onChangeInputs}
        value={routeData.name}
      />
      <label htmlFor="distance">Distance</label>
      <input
        type="number"
        id="distance"
        autoComplete="off"
        onChange={onChangeInputs}
        value={Number(routeData.distance)}
      />
      <label htmlFor="difficulty">Difficulty</label>
      <select
        name="difficulty"
        id="difficulty"
        onChange={onChangeInputs}
        value={routeData.difficulty}
      >
        <option value=""></option>
        <option value="Easy">Easy</option>
        <option value="Moderate">Moderate</option>
        <option value="Hard">Hard</option>
      </select>
      <label htmlFor="elevationGain">Elevation Gain</label>
      <input
        type="number"
        id="elevationGain"
        autoComplete="off"
        onChange={onChangeInputs}
        value={Number(routeData.elevationGain)}
      />
      <label htmlFor="photo">Photo</label>
      <input
        type="url"
        id="photo"
        autoComplete="off"
        onChange={onChangeInputs}
        value={routeData.photo}
      />
      <label htmlFor="ubication">Ubication</label>
      <input
        type="text"
        id="ubication"
        autoComplete="off"
        onChange={onChangeInputs}
        value={routeData.ubication}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        autoComplete="off"
        onChange={onChangeInputs}
        value={routeData.description}
      />
      <Button className="form-button" disabled={!isComplete}>
        ADD ROUTE
      </Button>
    </FormStyled>
  );
};

export default Form;
