import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export const isNavigationReady = () => navigationRef?.isReady();

export const defaultScreenOptions = () => ({
  headerShown: false,
});

export const defaultBottomTabBarScreenOptions = () => ({
  headerShown: false,
});
