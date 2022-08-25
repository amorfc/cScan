import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import AppContainer from "./AppContainer";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  type ICustomTheme = MyThemeType;
}
export default function App() {
  return (
    <NativeBaseProvider>
      <AppContainer />
    </NativeBaseProvider>
  );
}
