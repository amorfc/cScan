import { Text } from "native-base";
import React from "react";
import { TextProps } from "react-native";

export enum CTextFontSize {
  "SM" = "sm",
  "2XS" = "2xs",
  "XS" = "xs",
  "MD" = "md",
  "XL" = "xl",
  "LG" = "lg",
  "XL2" = "2xl",
  "3XL" = "3xl",
  "4XL" = "4xl",
  "5XL" = "5xl",
  "6XL" = "6xl",
  "7XL" = "7xl",
  "8XL" = "8xl",
  "9XL" = "9xl",
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
