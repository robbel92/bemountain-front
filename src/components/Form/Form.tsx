import { useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";
import { RouteStructure } from "../../store/routes/types";
import { useAppSelector } from "../../store";

interface FormProps {
  actionOnSubmit: (route: RouteStructure | Partial<RouteStructure>) => void;
  route?: RouteStructure;
}

const Form = ({ actionOnSubmit, route }: FormProps): React.ReactElement => {
  const { image, name, id } = useAppSelector((state) => state.userStore);
  let distance0;
  let elevatonGain0;

  const initialRouteData = {
    name: route ? route.name : "",
    difficulty: route ? route.difficulty : "",
    photo: route ? route.photo : "",
    ubication: route ? route.ubication : "",
    distance: route ? route.distance : distance0,
    elevationGain: route ? route.elevationGain : elevatonGain0,
    description: route ? route.description : "",
  };
  const [routeData, setRouteData] =
    useState<Partial<RouteStructure>>(initialRouteData);

  const isComplete = Object.values(routeData).every((value) => {
    return value.toString().length > 0 && value.toString() !== "0";
  });

  const handleOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    actionOnSubmit(
      !route
        ? { ...routeData, authorImage: image, authorName: name }
        : {
            ...routeData,
            authorImage: image,
            authorName: name,
            id: (route as unknown as RouteStructure).id,
            author: id,
          }
    );
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
        {route ? "MODIFY ROUTE" : "ADD ROUTE"}
      </Button>
    </FormStyled>
  );
};

export default Form;
