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
  },
});

export const { loadRoutes: loadRoutesActionCreator } = RoutesSlice.actions;
export const { removeRoute: removeRouteActionCreator } = RoutesSlice.actions;
export const routesReducer = RoutesSlice.reducer;
