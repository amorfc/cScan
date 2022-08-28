import { Stack } from "native-base";
import React from "react";
import { ComponentBaseProps } from "../../common/types/common";

type BaseContainerProps = ComponentBaseProps;

const BaseContainer = (props: BaseContainerProps) => {
  return <Stack>{props.children}</Stack>;
};

export default BaseContainer;
