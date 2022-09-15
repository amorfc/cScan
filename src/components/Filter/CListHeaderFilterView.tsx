import { Container, HStack } from "native-base";
import React from "react";
import CBadge from "../Badge/CBadge";

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
    <Container mx={"1"}>
      <CBadge key={index} colorScheme={"darkBlue"} borderRadius={"full"} label={item.label} />
    </Container>
  );

  return <HStack>{items.map((item, index) => renderItem({ item, index }))}</HStack>;
};

export default CListHeaderFilterView;
