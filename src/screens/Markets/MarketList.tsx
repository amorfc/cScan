import { Flex } from "native-base";
import React from "react";
import CFlatList from "../../components/Lists/CFlatList";
import CText from "../../components/Text/CText";
import { MarketItem } from "../../models/serviceModels";
import { useLatestCCList } from "../../swr/useLatestCCList";

const MarketList = () => {
  const { data: markets, error, isValidating } = useLatestCCList<MarketItem[], string>();

  const renderItem = ({ item }: { item: MarketItem }) => {
    return <CText text={item?.slug} />;
  };

  return (
    <Flex px={"5"} py={"2"}>
      <CFlatList<MarketItem>
        data={markets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Flex>
  );
};

export default MarketList;
