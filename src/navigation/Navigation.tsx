import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AssetDetail from "../screens/AssetDetail/Portfolio";
import Markets from "../screens/Markets/Markets";
import NotFound from "../screens/NotFound/NotFound";
import Portfolio from "../screens/Portfolio/Portfolio";
import { RootStackParamList, RootTabParamList } from "./types";

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name={"Root"} component={BottomTabNavigator} />
      <RootStack.Screen name={"NotFound"} component={NotFound} />
    </RootStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={"Markets"} component={Markets} />
      <BottomTab.Screen name={"Portfolio"} component={Portfolio} />
      <BottomTab.Screen name={"AssetDetail"} component={AssetDetail} />
    </BottomTab.Navigator>
  );
};

export default Navigation;
