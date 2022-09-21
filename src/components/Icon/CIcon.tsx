import { Icon, IIconProps } from "native-base";
import React from "react";
import { iconList } from "./customSvgIconList";

interface CIconProps extends IIconProps {
  svgName?: typeof iconList;
}

const CIcon = (props: CIconProps) => {
  const { svgName = undefined } = props;
  return <Icon {...props}>{svgName ? svgName : null}</Icon>;
};

export default CIcon;
