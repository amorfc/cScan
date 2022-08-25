import { StatusBar } from "expo-status-bar";
import { useColorModeValue, useSafeArea } from "native-base";
import React from "react";
import { useCRouteCUtils } from "../../hooks/useCRouteCUtils";
import CBox from "../Box/CBox";

//TODO - Move all hard coded strings to theme&color definitions
const CStatusBar = () => {
  //Provides the text color to the status bar
  const barStyle = useColorModeValue("dark", "light");
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
  });
  const { statusBarHidden: isHidden } = useCRouteCUtils();
  const backgroundColor = isHidden ? "black" : "white";

  return (
    <CBox bg={backgroundColor} {...safeAreaProps}>
      <StatusBar
        animated
        backgroundColor={backgroundColor}
        hideTransitionAnimation={"slide"}
        style={isHidden ? "default" : barStyle}
        hidden={isHidden}
      />
    </CBox>
  );
};

export default CStatusBar;
