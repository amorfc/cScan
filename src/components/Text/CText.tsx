import { Text } from "native-base";
import React from "react";

interface CTextProps {
  text: string;
}

const CText = (props: CTextProps) => {
  const { text } = props;
  return <Text>{text}</Text>;
};

export default CText;
