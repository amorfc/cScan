import React from "react";
import { ComponentBaseProps } from "../common/types/common";

type BaseScreenContainerProps = ComponentBaseProps;

const BaseScreenContainer = (props: BaseScreenContainerProps) => {
  return <>{props.children}</>;
};

export default BaseScreenContainer;
