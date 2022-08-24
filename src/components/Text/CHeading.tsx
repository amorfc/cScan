import { Heading } from "native-base";
import React from "react";
import { ComponentBaseProps } from "../../common/types/common";

type CHeadingProps = ComponentBaseProps;

const CHeading = (props: CHeadingProps) => {
  return <Heading>{props.children}</Heading>;
};

export default CHeading;
