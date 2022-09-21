import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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

const BottomTab = createMaterialBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator shifting={true} activeColor="red" barStyle={{ backgroundColor: "white" }}>
      <BottomTab.Screen
        name={"MarketsStack"}
        component={MarketsNavigator}
        options={{
          ...defaultBottomTabBarScreenOptions(),
          tabBarLabel: "Markets",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="alpha-m" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name={"Portfolio"}
        component={Portfolio}
        options={{
          ...defaultBottomTabBarScreenOptions(),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-arc" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Navigation;
