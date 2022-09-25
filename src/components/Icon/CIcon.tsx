import { Icon, IIconProps } from "native-base";
import React from "react";

interface CIconProps extends IIconProps {
  svgName?: JSX.Element;
}

const CIcon = (props: CIconProps) => {
  const { svgName = undefined } = props;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore:next-line
  return <Icon {...props}>{svgName}</Icon>;
};

export default CIcon;
