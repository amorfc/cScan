import { Flex } from "native-base";
import React from "react";
import AssetCard from "../../components/Cards/AssetCard";
import CFlatList, { TRenderItem } from "../../components/Lists/CFlatList";
import { MarketItem } from "../../models/serviceModels";
import { useLatestCCList } from "../../swr/useLatestCCList";

const MarketList = () => {
  const { data: markets, error, isValidating } = useLatestCCList<MarketItem[], string>();

  const renderItem = ({ item, index }: TRenderItem<MarketItem>) => {
    //Temp usd
    const quote = item.quote.USD;

    return (
      <AssetCard
        rank={index + 1}
        symbol={item.symbol}
        quote={{
          marketCap: quote.market_cap,
          price: quote.price,
          percentChange: quote.percent_change_24h,
        }}
        //Temp logo
        logo={undefined}
      />
    );
  };

  return (
    <Flex px={"5"} py={"2"}>
      <CFlatList<MarketItem>
        data={markets ?? []}
        renderItem={(params) => renderItem(params)}
        keyExtractor={(item) => item.id.toString()}
      />
    </Flex>
  );
};

export default MarketList;
