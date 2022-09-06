import { View } from "native-base";
import React, { forwardRef } from "react";
import { TouchableOpacity } from "react-native";
import CBox from "../Box/CBox";
import CText, { CTextFontSize } from "../Text/CText";
import { CTVRoute } from "./CTabView";

interface CTVTabProps {
  item: Omit<CTVRoute, "render" | "ref">;
  onTabPress: () => void;
}

const CTVTab = forwardRef((props: CTVTabProps, ref) => {
  const { item, onTabPress } = props;

  return (
    <TouchableOpacity onPress={onTabPress}>
      <View ref={ref}>
        <CBox px={"4"}>
          <CText fontSize={CTextFontSize.LG} text={item.title} />
        </CBox>
      </View>
    </TouchableOpacity>
  );
});

export default CTVTab;
