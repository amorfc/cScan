import { Text } from "native-base";
import React from "react";

const CText = (props) => {
  const { label } = props;
  return <Text>{label}</Text>;
};

export default CText;
