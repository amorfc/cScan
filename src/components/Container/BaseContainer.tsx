import { VStack } from "native-base";
import React from "react";
import { ComponentBaseProps } from "../../common/types/common";

type BaseContainerProps = ComponentBaseProps;

const BaseContainer = (props: BaseContainerProps) => {
  return <VStack>{props.children}</VStack>;
};

export default BaseContainer;
