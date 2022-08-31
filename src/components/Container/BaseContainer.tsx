import { Box, IBoxProps } from "native-base";
import React from "react";
import { ComponentBaseProps } from "../../common/types/common";

type BaseContainerProps = ComponentBaseProps & IBoxProps;

const BaseContainer = (props: BaseContainerProps) => {
  return <Box {...props}>{props.children}</Box>;
};

export default BaseContainer;
