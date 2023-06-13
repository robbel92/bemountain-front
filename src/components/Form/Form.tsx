import { useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";
import { RouteStructure } from "../../store/routes/types";
import { useAppSelector } from "../../store";

interface FormProps {
  actionOnSubmit: (newRoute: Partial<RouteStructure>) => void;
}

const Form = ({ actionOnSubmit }: FormProps): React.ReactElement => {
  const { image, name } = useAppSelector((state) => state.userStore);
  let distance0;
  let elevatonGain0;
  const initialRouteData = {
    name: "",
    difficulty: "",
    photo: "",
    ubication: "",
    distance: distance0,
    elevationGain: elevatonGain0,
    description: "",
  };
  const [routeData, setRouteData] =
    useState<Partial<RouteStructure>>(initialRouteData);

  const isComplete = Object.values(routeData).every((value) => {
    return value.toString().length > 0 && value.toString() !== "0";
  });

  const handleOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    actionOnSubmit({ ...routeData, authorImage: image, authorName: name });
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
      <label htmlFor="distance">Distance (Km)</label>
      <input
        type="number"
        id="distance"
        autoComplete="off"
        onChange={onChangeInputs}
        value={routeData.distance}
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
      <label htmlFor="elevationGain">Elevation Gain (m)</label>
      <input
        type="number"
        id="elevationGain"
        autoComplete="off"
        onChange={onChangeInputs}
        value={routeData.elevationGain}
      />
      <label htmlFor="photo">Photo (Url)</label>
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
