import React from "react";
import { StatusBar } from "expo-status-bar";
import { useColorModeValue } from "native-base";

const CStatusBar = () => {
  //Provides the text color to the status bar
  const barStyle = useColorModeValue("dark", "light");

  return <StatusBar style={barStyle} />;
};

export default CStatusBar;
