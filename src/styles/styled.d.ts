import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    fonts: {
      primary_title: string;
    };
    colors: {
      background: string;
      button: string;
      font: string;
    };
  }
}

export default DefaultTheme;
