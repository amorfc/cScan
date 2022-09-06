import { Dimensions, Platform, StatusBar } from "react-native";
import { isIOS } from "./common";

export const RFontSPercentage = (size: number) => {
  const { height, width } = Dimensions.get("window");
  const standardLength = width > height ? width : height;
  const offset = (width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight) ?? 0; // iPhone X style SafeAreaView size in portrait

  const deviceHeight = !isIOS() ? standardLength - offset : standardLength;

  const heightPercent = (size * deviceHeight) / 100;
  return Math.round(heightPercent);
};
