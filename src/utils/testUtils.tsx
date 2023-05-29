import { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RootState, setupStore, store } from "../store";
import { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";

export const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <>
        <Provider store={testStore}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </Provider>
      </>
    );
  };

  render(ui, { wrapper: Wrapper });
};
