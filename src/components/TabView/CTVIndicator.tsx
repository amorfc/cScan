/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import { Animated, useWindowDimensions } from "react-native";

const CTVIndicator = (props) => {
  const { measures, scrollX } = props;
  const { width } = useWindowDimensions();
  const inputRange = measures?.map((_, i) => i * width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures?.map((measure) => measure?.width),
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures?.map((measure) => measure?.x),
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom: 0,
        width: indicatorWidth,
        height: 2,
        backgroundColor: "black",
        transform: [{ translateX }],
      }}
    />
  );
};

export default CTVIndicator;
