import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RouteStructure, RoutesStateStructure } from "./types";

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
  },
});

export const { loadRoutes: loadRoutesActionCreator } = RoutesSlice.actions;
export const routesReducer = RoutesSlice.reducer;
