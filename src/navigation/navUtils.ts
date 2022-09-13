import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export const navigate = ({ name, params }: { name; params? }) => {
  navigationRef.current?.navigate(name, params);
};

export const isNavigationReady = () => navigationRef?.isReady();

export const defaultScreenOptions = () => ({
  headerShown: false,
});

export const defaultBottomTabBarScreenOptions = () => ({
  headerShown: false,
});
