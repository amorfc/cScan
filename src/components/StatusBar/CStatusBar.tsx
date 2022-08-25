import React from "react";
import { StatusBar } from "expo-status-bar";
import { useColorModeValue, useSafeArea } from "native-base";
import CBox from "../Box/CBox";

const CStatusBar = () => {
  //Provides the text color to the status bar
  const barStyle = useColorModeValue("dark", "light");
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
  });
  return (
    <CBox {...safeAreaProps}>
      <StatusBar style={barStyle} />
    </CBox>
  );
};

export default CStatusBar;
