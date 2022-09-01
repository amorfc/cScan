import { View } from "native-base";
import React, { forwardRef } from "react";
import CBox from "../Box/CBox";
import CText from "../Text/CText";

const CTVTab = forwardRef((props, ref) => {
  const { item } = props;

  return (
    <View ref={ref}>
      <CBox px={"4"}>
        <CText text={item.title} />
      </CBox>
    </View>
  );
});

export default CTVTab;
