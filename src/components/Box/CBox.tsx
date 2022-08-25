import React from "react";
import { Box, IBoxProps } from "native-base";

type CBoxProps = IBoxProps;

const CBox = (props: CBoxProps) => {
  return <Box {...props}>{props.children}</Box>;
};

export default CBox;
