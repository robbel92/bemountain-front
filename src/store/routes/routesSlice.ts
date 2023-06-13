import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PayloadRemove, RouteStructure, RoutesStateStructure } from "./types";

export const initialRoutesState: RoutesStateStructure = {
  routes: [],
  totalRoutes: 0,
  currentRoute: {
    id: "",
    name: "",
    author: "",
    authorImage: "",
    authorName: "",
    description: "",
    difficulty: "",
    distance: 0,
    ubication: "",
    photo: "",
    elevationGain: 0,
  },
};

export const routesSlice = createSlice({
  name: "routes",
  initialState: initialRoutesState,
  reducers: {
    loadRoutes: (
      currentState,
      action: PayloadAction<{ routes: RouteStructure[]; totalRoutes: number }>
    ): RoutesStateStructure => ({
      ...currentState,
      routes: [...action.payload.routes],
      totalRoutes: action.payload.totalRoutes,
    }),
    removeRoute: (
      currentState: RoutesStateStructure,
      action: PayloadAction<PayloadRemove>
    ): RoutesStateStructure => ({
      ...currentState,
      routes: currentState.routes.filter(
        (route) => route.id !== action.payload.routeId
      ),
    }),
    addRoute: (
      currentState: RoutesStateStructure,
      action: PayloadAction<Partial<RouteStructure>>
    ): RoutesStateStructure => ({
      ...currentState,
      routes: [...currentState.routes, action.payload],
    }),
    loadCurrentRoute: (
      currentState: RoutesStateStructure,
      action: PayloadAction<RouteStructure>
    ): RoutesStateStructure => ({
      ...currentState,
      currentRoute: { ...action.payload },
    }),
  },
});

export const { loadRoutes: loadRoutesActionCreator } = routesSlice.actions;
export const { removeRoute: removeRouteActionCreator } = routesSlice.actions;
export const { addRoute: addRouteActionCreator } = routesSlice.actions;
export const { loadCurrentRoute: loadCurrentRouteActionCreator } =
  routesSlice.actions;
export const routesReducer = routesSlice.reducer;
