import { Icon, IIconProps } from "native-base";
import React from "react";
import { iconList } from "./customSvgIconList";

interface CIconProps extends IIconProps {
  svgName?: typeof iconList;
}

const CIcon = (props: CIconProps) => {
  const { svgName = undefined } = props;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore:next-line
  return <Icon {...props}>{svgName}</Icon>;
};

export default CIcon;
