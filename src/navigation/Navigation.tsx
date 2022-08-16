import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, RootTabParamList } from "./types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
      <RootStack.Screen name={"NotFound"} component={() => <></>} />
    </RootStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={"Markets"} component={() => <></>} />
      <BottomTab.Screen name={"Portfolio"} component={() => <></>} />
    </BottomTab.Navigator>
  );
};

export default Navigation;
