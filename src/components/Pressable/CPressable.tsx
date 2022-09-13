import { Pressable } from "native-base";
import React from "react";
import { PressableProps } from "react-native";
import { Children } from "../../common/types/common";

export enum PressableAnimationType {
  SCALE,
}

interface CPressableProps extends Omit<PressableProps, "onFocus" | "onBlur"> {
  animationType?: PressableAnimationType;
  children?: Children;
}

const CPressable = (props: CPressableProps) => {
  const { animationType } = props;

  return <Pressable {...props}>{props.children}</Pressable>;
};

export default CPressable;
