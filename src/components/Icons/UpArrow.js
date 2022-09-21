import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUpArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330.002 330.002"
    style={{
      enableBackground: "new 0 0 330.002 330.002",
    }}
    xmlSpace="preserve"
    width="24"
    height="24"
    {...props}
  >
    <Path d="m324.371 213.287-150.004-120a15.002 15.002 0 0 0-18.741.001l-149.996 120A15 15 0 0 0 15 240.001h300a14.999 14.999 0 0 0 14.154-10.035 14.998 14.998 0 0 0-4.783-16.679z" />
  </Svg>
);

export default SvgUpArrow;
