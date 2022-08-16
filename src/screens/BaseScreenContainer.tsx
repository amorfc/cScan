import React from "react";
import { ComponentBaseProps } from "../types/commonTypes";

interface BaseScreenContainerProps extends ComponentBaseProps {}

const BaseScreenContainer = (props: BaseScreenContainerProps) => {
  return <>{props.children}</>;
};

export default BaseScreenContainer;
