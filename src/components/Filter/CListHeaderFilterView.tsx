import { HStack } from "native-base";
import React from "react";
import CBadge from "../Badge/CBadge";
import BaseContainer from "../Container/BaseContainer";

export interface ListHeaderFilterItem {
  id: string;
  action: () => void;
  label: string;
}

interface CListHeaderFilterViewProps {
  items: ListHeaderFilterItem[];
}

const CListHeaderFilterView = (props: CListHeaderFilterViewProps) => {
  const { items } = props;

  const renderItem = ({ item, index }) => (
    <BaseContainer mx={"1"}>
      <CBadge key={index} colorScheme={"darkBlue"} borderRadius={"full"} label={item.label} />
    </BaseContainer>
  );

  return <HStack>{items.map((item, index) => renderItem({ item, index }))}</HStack>;
};

export default CListHeaderFilterView;
