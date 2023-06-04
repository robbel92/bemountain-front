import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FeedbackPayloadStructure, UiStateStructure } from "./types";

const initialUiState: UiStateStructure = {
  isLoading: false,
  message: "",
  isError: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isLoading: true,
    }),
    hideLoading: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isLoading: false,
    }),
    showFeedback: (
      currentUiState: UiStateStructure,
      action: PayloadAction<FeedbackPayloadStructure>
    ) => ({
      ...currentUiState,
      message: action.payload.message,
      isError: action.payload.isError,
    }),
    hideFeedback: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      message: "",
      isError: false,
    }),
  },
});

export const { showLoading: showLoadingActionCreator } = uiSlice.actions;
export const { hideLoading: hideLoadingActionCreator } = uiSlice.actions;
export const { showFeedback: showFeedbackActionCreator } = uiSlice.actions;
export const { hideFeedback: hideFeedbackActionCreator } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
