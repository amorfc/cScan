import { Text } from "native-base";
import React from "react";
import { TextProps } from "react-native";

export enum CTextFontSize {
  SM = "sm",
  XS2 = "2xs",
  XS = "xs",
  MD = "md",
  XL = "xl",
  LG = "lg",
  XL2 = "2xl",
  XL3 = "3xl",
  XL4 = "4xl",
  XL5 = "5xl",
  XL6 = "6xl",
  XL7 = "7xl",
  XL8 = "8xl",
  XL9 = "9xl",
}

interface CTextProps extends TextProps {
  text: string;
  fontSize?: CTextFontSize;
}

const CText = (props: CTextProps) => {
  const { text } = props;
  return <Text {...props}>{text}</Text>;
};

export default CText;
