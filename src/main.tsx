import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/@fontsource/montserrat/400.css";
import "../node_modules/@fontsource/montserrat/600.css";
import "../node_modules/@fontsource/montserrat/800.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={appRouter}></RouterProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
