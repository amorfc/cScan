import React from "react";
import { ComponentBaseProps } from "../types/common";

interface BaseScreenContainerProps extends ComponentBaseProps {}

const BaseScreenContainer = (props: BaseScreenContainerProps) => {
  return <>{props.children}</>;
};

export default BaseScreenContainer;
