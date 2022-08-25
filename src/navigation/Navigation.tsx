import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AssetDetail from "../screens/AssetDetail/Portfolio";
import Markets from "../screens/Markets/Markets";
import NotFound from "../screens/NotFound/NotFound";
import Portfolio from "../screens/Portfolio/Portfolio";
import { defaultBottomTabBarScreenOptions, defaultScreenOptions, navigationRef } from "./navUtils";
import { MarketsStackParamList, RootStackParamList, RootTabParamList } from "./types";

interface NavigationProps {
  onNavReady: (isReady: boolean) => void;
}

const Navigation = (props: NavigationProps) => {
  const { onNavReady } = props;
  const onReady = () => {
    onNavReady && onNavReady(true);
  };

  return (
    <NavigationContainer onReady={onReady} ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

const MarketsStack = createNativeStackNavigator<MarketsStackParamList>();

const MarketsNavigator = () => {
  return (
    <MarketsStack.Navigator>
      <MarketsStack.Screen name={"Markets"} component={Markets} options={defaultScreenOptions()} />
      <MarketsStack.Screen
        name={"AssetDetail"}
        component={AssetDetail}
        options={defaultScreenOptions()}
      />
    </MarketsStack.Navigator>
  );
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={"Root"}
        component={BottomTabNavigator}
        options={defaultScreenOptions()}
      />
      <RootStack.Screen name={"NotFound"} component={NotFound} options={defaultScreenOptions()} />
    </RootStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={"MarketsStack"}
        component={MarketsNavigator}
        options={defaultBottomTabBarScreenOptions()}
      />
      <BottomTab.Screen
        name={"Portfolio"}
        component={Portfolio}
        options={defaultBottomTabBarScreenOptions()}
      />
    </BottomTab.Navigator>
  );
};

export default Navigation;
