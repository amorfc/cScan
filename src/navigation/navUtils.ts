import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export const defaultScreenOptions = () => ({
  headerShown: false,
});

export const defaultBottomTabBarScreenOptions = () => ({
  headerShown: false,
});
