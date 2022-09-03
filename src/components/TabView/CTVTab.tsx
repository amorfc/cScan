import { View } from "native-base";
import React, { forwardRef } from "react";
import { TouchableOpacity } from "react-native";
import CBox from "../Box/CBox";
import CText from "../Text/CText";

interface CTVTabProps {
  item: any;
  onTabPress: () => void;
}
const CTVTab = forwardRef((props: CTVTabProps, ref) => {
  const { item, onTabPress } = props;

  return (
    <TouchableOpacity onPress={onTabPress}>
      <View ref={ref}>
        <CBox px={"4"}>
          <CText text={item.title} />
        </CBox>
      </View>
    </TouchableOpacity>
  );
});

export default CTVTab;
