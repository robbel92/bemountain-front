import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PayloadRemove, RouteStructure, RoutesStateStructure } from "./types";

const initialRoutesState: RoutesStateStructure = {
  routes: [],
};

export const RoutesSlice = createSlice({
  name: "routes",
  initialState: initialRoutesState,
  reducers: {
    loadRoutes: (
      currentState,
      action: PayloadAction<RouteStructure[]>
    ): RoutesStateStructure => ({
      ...currentState,
      routes: [...action.payload],
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
  },
});

export const { loadRoutes: loadRoutesActionCreator } = RoutesSlice.actions;
export const { removeRoute: removeRouteActionCreator } = RoutesSlice.actions;
export const { addRoute: addRouteActionCreator } = RoutesSlice.actions;
export const routesReducer = RoutesSlice.reducer;
